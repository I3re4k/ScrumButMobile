Ext.define('ScrumButMobile.view.Result', {
    extend: 'Ext.Panel',
    
    xtype: 'resultPanel',

    config: {
        html: 'Result',
        items: [
            {
                xtype: 'headerPanel',
                title: 'Ergebnis'
            }
        ]
    }
});