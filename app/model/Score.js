Ext.define('ScrumButMobile.model.Score', {
    extend: 'Ext.data.Model',

    config: {
        fields: ['overallScore'],
        proxy: {
            type: 'localstorage'
        }
    },

    /**
     * Score store reference
     * 
     * @var ScrumButMobile_store_Score
     */
    scoreStore: undefined,

    /**
     * Returns the Score store
     *
     * @return ScrumButMobile_store_Score
     */
    getScoreStore: function() {
        if(undefined == this.scoreStore) {
            this.scoreStore = Ext.data.StoreManager.lookup('Score');
        }
        return this.scoreStore;
    },

    /**
     * Updates the Score to a new given Score
     *
     * @param newScore  The new Score that should be entered
     */
    updateScore: function(newScore) {
        var store =  this.getScoreStore();
        var record = store.getAt(0);

        if(undefined == record) {
            store.add({'overallScore': newScore});
            store.sync();
        } else {
            record.set('overallScore', newScore);
        }
    },

    /**
     * Increases the Score by a given amount
     *
     * @param scoreToAdd    Score that should be added
     */
    increaseScore: function(scoreToAdd) {
        var score = this.getScoreStore().getAt(0);
        if(undefined == score) {
            this.getScoreStore().add({'overallScore': scoreToAdd});
        } else {
            var newScore = score.data.overallScore + parseInt(scoreToAdd);
            score.set('overallScore', newScore);
        }

    },

    /**
     * Decreases Score by a given amount
     *
     * @param scoreToSubstract  Score that should be substracted
     */
    decreaseScore: function(scoreToSubstract) {
        var score = this.getScoreStore().getAt(0);
        var newScore = score.data.overallScore - parseInt(scoreToSubstract);

        score.set('overallScore', newScore);
    },

    /**
     * Gets the current Score from the Store
     *
     * @return Int 
     */
    getScore: function() {
        var record = this.getScoreStore().getAt(0);
        var score = 0;
        if(undefined !== record) {
            score = record.data.overallScore;
        }
        return score;
    },
    
    /**
     * Sets the current Score to zero
     */
    resetScore: function() {
        var score = this.getScoreStore().getAt(0);
        if(undefined == score) {
            this.getScoreStore().add({'overallScore': 0});
        } else {
            score.set('overallScore', 0);
        }
    }
});