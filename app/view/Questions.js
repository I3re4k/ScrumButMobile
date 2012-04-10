Ext.define('ScrumButMobile.view.Questions', {
    extend: 'Ext.Carousel',
    layout: 'fit',
    xtype: 'questionsPanel',
    config: {
        title: 'Fragen',
        iconCls: 'bookmarks',
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
})