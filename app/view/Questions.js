Ext.define('ScrumButMobile.view.Questions', {
    extend: 'Ext.Carousel',
    layout: 'fit',
    xtype: 'questionsPanel',
    config: {
        title: 'Fragen',
        iconCls: 'bookmarks',
        listeners: {
            activeitemchange: function() {
                this.updateResult();
            }
        }
    },
    
    updateResult: function() {
        var items = this.getItems().items;
        var resultPage = items[items.length - 1];
        var resultPageText = ScrumButMobile.app.getController('Main').getResultPageText();

        resultPage.setHtml(resultPageText);
    },
    
    show: function() {
        // get questions
        var questions = ScrumButMobile.app.getController('Main').getQuestions();
        
        //place questions into carousel
        this.setItems(questions);
        
        //show carousel
        this.setHidden(false);
        
        //first page is active
        this.setActiveItem(0);
    }
});