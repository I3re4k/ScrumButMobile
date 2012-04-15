Ext.define('ScrumButMobile.model.Data', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            'id', 'title', 'text', 'answers'
        ]
    },

    /**
     * All questions as an Array in an item format
     *
     * @param Array
     */
    questions: [],

    lastSelected: undefined,

    setLastSelected: function(element) {
        this.lastSelected = element;
    },

    getLastSelected: function(){
        return this.lastSelected;
    },

    /**
     * Create QuestionPanelwhich can be inserted as an item (includes headlines)
     *
     * @param result        The Result from fetching the store
     */
    createQuestions: function(result) {
        //generate all questions
        for (var i = 0; i < result.length; i++) {
            var items = this.createAnswers(result[i].data.answers, i);

            items.push(
                {
                    xtype: 'headerPanel',
                    title: result[i].data.title
                }
            );

            this.questions[i] = {
                xtype: 'questionPanel',
                html: result[i].data.text,

                items: items
            };
        }
        this.questions.push({
            xtype: 'resultPanel'
        });
    },

    /**
     * Creates an Answers Array that can be inserted as an item
     *
     * @param answers           Answers Array from Store
     * @param page              The Page used for radiobutton groups
     * @return answersArray     The Answers Array
     */
    createAnswers: function(answers, page) {
        var answersArray = [];

        for(var i = 0; i < answers.length; i++) {
            answersArray[i] = {
                xtype: 'radiofield',
                value: answers[i].points,
                label: answers[i].text,
                name: 'question' + page
            }
        }
        return answersArray;
    },

    /**
     * Sets the data from Store into class attribute by calling @see createQuestions
     */
    setQuestions: function() {
        var store = Ext.data.StoreManager.lookup('Data');
        store.load({
            //Dynamicly builds questions from store and place them into a carousel
            callback: this.createQuestions,
            scope: this
        });
    }
});
