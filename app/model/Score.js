Ext.define('ScrumButMobile.model.Score', {
    extend: 'Ext.data.Model',

    config: {
        fields: ['overallScore'],
        proxy: {
            type: 'localstorage'
        }
    },

    scoreStore: undefined,

    getScoreStore: function() {
        if(undefined == this.scoreStore) {
            this.scoreStore = Ext.data.StoreManager.lookup('Score');
        }
        return this.scoreStore;
    },



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

    increaseScore: function(scoreToAdd) {
        var score = this.getScoreStore().getAt(0);
        if(undefined == score) {
            this.getScoreStore().add({'overallScore': scoreToAdd});
        } else {
            var newScore = score.data.overallScore + parseInt(scoreToAdd);
            score.set('overallScore', newScore);
        }

    },

    decreaseScore: function(scoreToSubstract) {
        var score = this.getScoreStore().getAt(0);
        var newScore = score.data.overallScore - parseInt(scoreToSubstract);

        score.set('overallScore', newScore);
    },

    getScore: function() {
        var record = this.getScoreStore().getAt(0);
        var score = 0;
        if(undefined !== record) {
            score = record.data.overallScore;
        }
        return score;
    },
    
    resetScore: function() {
        var score = this.getScoreStore().getAt(0);
        if(undefined == score) {
            this.getScoreStore().add({'overallScore': 0});
        } else {
            score.set('overallScore', 0);
        }
    }
});