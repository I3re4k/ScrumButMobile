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
    resultModel: "",


    getResultModel: function() {
        if("" === this.resultModel) {
            this.resultModel = Ext.create('ScrumButMobile.model.Result');
        }
        return this.resultModel;
    },
    
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
    
    getScore: function() {
        var score = this.getScoreModel().getScore();
        return score;
    },
    
    getResultPageText: function() {
        var score = this.getScoreModel().getScore();
        var text = this.getResultModel().getResultPageText(score);

        return text;
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
        var previousSelected = this.getDataModel().getPreviousSelected(element.getName());

        if(undefined == previousSelected || false == previousSelected.isChecked()) {
            if (undefined !== previousSelected && previousSelected.getName() == element.getName()) {
                this.decreaseScore(previousSelected.getValue());
            }
            this.getScoreModel().increaseScore(element.getValue());
            this.getDataModel().setPreviousSelected(element, element.getName());
        }
    },

    decreaseScore: function(score) {
        this.getScoreModel().decreaseScore(score);
    },
    
    resetTest: function() {
        this.getScoreModel().resetScore();
        this.getDataModel().resetSelected();
    }
});