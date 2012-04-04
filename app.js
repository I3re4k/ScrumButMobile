/**
 * 
 */
Ext.Loader.setConfig({
    enabled: true
});
Ext.application({
    
    name: "ScrumButMobile",
    controllers: ['Main'],
    models: ['Model'],
    views: ['Viewport', 'Questions', 'Home', 'Question', 'About', 'Result', 'Header', 'Footer'],
    
    launch: function(){
        Ext.create('ScrumButMobile.view.Viewport');
    }
});