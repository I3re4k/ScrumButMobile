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

    /**
     * Instances of previous selected Radiobuttons 
     * index = page, starting at 1
     *
     * @param Array
     */
    previousSelected: [],

    
    /**
     * Mark a Radiobutton as selected
     * 
     * @param element   Selected Radiobutton
     * @param index     Selected Page
     */
    setPreviousSelected: function(element, index) {
        this.previousSelected[index] = element;
    },

    /**
     * Returns a selected Radiobutton
     *
     * @return Ext.field.Radiobutton
     */
    getPreviousSelected: function(index) {
        return this.previousSelected[index];
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
     * @return Array     The Answers Array
     */
    createAnswers: function(answers, page) {
        var answersArray = [];
        page = parseInt(page) + 1;
        
        for(var i = 0; i < answers.length; i++) {
            answersArray[i] = {
                xtype: 'radiofield',
                value: answers[i].points,
                label: answers[i].text,
				labelWidth: '80%',
				cls: 'questionLabel',
                name: page
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
    },
    
    /**
     * Sets every radiobutton Object to unchecked and emptys
     * the previous selected array after that
     */
    resetSelected: function() {
        for (var i in this.previousSelected) {
            if (undefined !== this.previousSelected[i]) {
                this.previousSelected[i].setChecked(false);
            }
        }
        this.previousSelected = [];
    }
});
