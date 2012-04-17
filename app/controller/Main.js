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

    /**
     * Sets the questions on application startup so they are available when switching 
     * to Questions
     */
    init: function() {
        this.setQuestions();
    },

    /**
     * The Datamodel used for question operations
     *
     * @var ScrumButMobile_model_Data 
     */
    dataModel: "",
    
    /**
     * The Scoremodel used for Score operations
     *
     * @var ScrumButMobile_model_Score
     */
    scoreModel: "",
    
    /**
     * The Resultmodel used for Resultpage operations
     *
     * @var ScrumButMobile_model_Result
     */
    resultModel: "",

    /**
     * Returns the Resultmodel
     *
     * @return ScrumButMobile_model_Result
     */
    getResultModel: function() {
        if("" === this.resultModel) {
            this.resultModel = Ext.create('ScrumButMobile.model.Result');
        }
        return this.resultModel;
    },
    
    /**
     * Returns the Scoremodel
     *
     * @return ScrumButMobile_model_Score
     */
    getScoreModel: function() {
        if("" === this.scoreModel) {
            this.scoreModel = Ext.create('ScrumButMobile.model.Score');
        }
        return this.scoreModel;
    },

    /**
     * Returns the Datamodel
     *
     * @return ScrumButMobile_model_Data
     */
    getDataModel: function() {
        if("" === this.dataModel) {
            this.dataModel = Ext.create('ScrumButMobile.model.Data');
        }
        return this.dataModel;
    },
    
    /**
     * Sets the questions for the Datamodel
     */
    setQuestions: function() {
        this.getDataModel().setQuestions();
    },
    
    /**
     * Gets the as item formatted question Array of the Datamodel
     * 
     * @return Array
     */
    getQuestions: function() {
        var questions = this.getDataModel().questions;
        return questions;
    },
    
    /**
     * Returns the current Score
     *
     * @return Int
     */
    getScore: function() {
        var score = this.getScoreModel().getScore();
        return score;
    },
    
    /**
     * Returns the Text for the Result Page
     * Eg.: Erreichte Punkte: [score]
     *      Durschnittliche Punkte: [averageScore]
     *      [comment]
     *
     * @return String
     */
    getResultPageText: function() {
        var score = this.getScoreModel().getScore();
        var text = this.getResultModel().getResultPageText(score);

        return text;
    },

    /**
     * Increases the Score 
     * Called by Tap on a Radiobutton
     *
     * @param element   The Radiobox that was selected
     */
    increaseScore: function(element) {
        var previousSelected = this.getDataModel().getPreviousSelected(element.getName());

        //check if user selected the same radiobutton twice
        if(undefined == previousSelected || false == previousSelected.isChecked()) {
            
            //check if user selected a answer before and decreases score if the previous answer and the current differ
            if (undefined !== previousSelected && previousSelected.getName() == element.getName()) {
                this.decreaseScore(previousSelected.getValue());
            }
            
            //increase score and set new selected radiobutton
            this.getScoreModel().increaseScore(element.getValue());
            this.getDataModel().setPreviousSelected(element, element.getName());
        }
    },

    /**
     * Decreases Score by a given amount
     *
     * @param score     Amount to substract
     */
    decreaseScore: function(score) {
        this.getScoreModel().decreaseScore(score);
    },
    
    /**
     * Resets the Test 
     * Restores Stores and Radiobuttons to their original values
     */
    resetTest: function() {
        this.getScoreModel().resetScore();
        this.getDataModel().resetSelected();
    }
});