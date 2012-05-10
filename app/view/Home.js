Ext.define('ScrumButMobile.view.Home', {
    extend: 'Ext.Panel',
    fullscreen: true,
    xtype: 'homePanel',
    
    config: {
        title: 'Startseite',
        iconCls: 'home',
        html: 'Home',
        layout: 'hbox',
        items: [
            {
                xtype: 'headerPanel',
                title: 'Startseite'
            },
			{
				xtype: 'button',
				text: 'Zum Test',
				cls: 'buttonStartTest',
				id: 'startTest'
			}
        ]
    }
      
    
});