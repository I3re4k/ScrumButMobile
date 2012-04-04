Ext.define('ScrumButMobile.view.Questions', {
    extend: 'Ext.Carousel',
    
    xtype: 'questionsPanel',
    config: {
        title: 'Fragen',
        iconCls: 'bookmarks',
    },
    
    initialize: function() {
        store.load({
            //Dynamicly builds questions from store and place them into a carousel
            callback: function(result) {
                
                //all Questions in an item format
                var questions = [];
                
                //create all questions
                for (var i = 0; i < result.length; i++) {
                    questions[i] = {
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

                //Place questions into panel
                this.setItems(questions);
            },
            scope: this
        });
    }
})