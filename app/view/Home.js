Ext.define('ScrumButMobile.view.Home', {
    extend: 'Ext.Panel',
    
    xtype: 'homePanel',
    
    config: {
        title: 'Startseite',
        iconCls: 'home',
        html: 'Home',
        
        items: [
            {
                xtype: 'headerPanel',
                title: 'Startseite'
            }
        ]
    }
      
    
});