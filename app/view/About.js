Ext.define('ScrumButMobile.view.About', {
    extend: 'Ext.Panel',
    
    xtype: 'aboutPanel',
    config: {
        title: 'Impressum',
        iconCls: 'user',
        html: 'Impressum',
        
        items: [
            {
                xtype: 'headerPanel',
                title: 'Impressum'
            }
        ]
    }
    
})