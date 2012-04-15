Ext.define('ScrumButMobile.controller.Main', {
    extend: 'Ext.app.Controller',

    config: {
        control: {
            'radiofield': {
                check: 'increaseScore',
                uncheck: 'increaseScore'
            }
        }
    },

    init: function() {
        this.setQuestions();
    },

    dataModel: "",
    scoreModel: "",


    getScoreModel: function() {
        if("" === this.scoreModel) {
            this.scoreModel = Ext.create('ScrumButMobile.model.Score');
        }
        return this.scoreModel;
    },

    getDataModel: function() {
        if("" === this.dataModel) {
            this.dataModel = Ext.create('ScrumButMobile.model.Data');
        }
        return this.dataModel;
    },
    
    setQuestions: function() {
        this.getDataModel().setQuestions();
    },
    
    getQuestions: function() {
        var questions = this.getDataModel().questions;
        return questions;
    },
    
    createQuestions: function(result, operation, success) {
        var result = this.getDataModel().createQuestions();
        return result;
    },

    createAnswers: function(answers) {
        var answersResult = this.getDataModel().createAnswers(answers);
        return answersResult;
    },

    increaseScore: function(element) {
        var previousSelected = this.getDataModel().getLastSelected();

        if(undefined == previousSelected || false == previousSelected.isChecked()) {
            if (undefined !== previousSelected) {
                this.decreaseScore(previousSelected.getValue());
            }
            this.getScoreModel().increaseScore(element.getValue());
            console.log('current Score' + this.getScoreModel().getScore());
            this.getDataModel().setLastSelected(element);
        }
    },

    decreaseScore: function(score) {
        this.getScoreModel().decreaseScore(score);
    }
});