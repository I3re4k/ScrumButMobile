Ext.define('ScrumButMobile.controller.Main', {
    extend: 'Ext.app.Controller',
    
    //all Questions in an item format
    questions: [],
    
    init: function() {
        this.setQuestions();
    },
    
    setQuestions: function(){
        var store = Ext.data.StoreManager.lookup('Data'); 
        store.load({
            //Dynamicly builds questions from store and place them into a carousel
            callback: this.createQuestions,
            scope: this
        });
    },
    
    getQuestions: function() {
        return this.questions;
    },
    
    createQuestions: function(result, operation, success) {
        //create all questions
        for (var i = 0; i < result.length; i++) {
            this.questions[i] = {
                xtype: 'questionPanel',
                html: result[i].data.text,
                
                items: [
                    {
                        xtype: 'headerPanel',
                        title: result[i].data.title
                    }
                ]
            };
        }
    }
});