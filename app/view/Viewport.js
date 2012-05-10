Ext.define('ScrumButMobile.view.Viewport', {
    extend: 'Ext.TabPanel',
    
    config: {
        fullscreen: true,
        tabBarPosition: 'bottom',
        items: [
            {
                xtype: 'homePanel'
            },
			{
                xtype: 'questionsPanel'
            },
            {
                xtype: 'aboutPanel'
            } 
        ]
    }
});