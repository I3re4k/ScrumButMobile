Ext.application({
    
    name: "ScrumButMobile",
    controllers: ['Main'],
    models: ['Data', 'Score', 'Result', 'Stats'],
    views: ['Viewport', 'Questions', 'Home', 'Question', 'About', 'Result', 'Header', 'Footer'],
    stores: ['Data', 'Score'],
    	
    launch: function(){
        Ext.create('ScrumButMobile.view.Viewport');
    }
});