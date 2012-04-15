Ext.define('ScrumButMobile.view.Result', {
    extend: 'Ext.Panel',
    
    xtype: 'resultPanel',

    config: {
        items: [
            {
                xtype: 'headerPanel',
                title: 'Ergebnis'
            },
            {
                xtype: 'button',
                text: 'Test erneut starten',
                cls: 'resetButton',
                listeners: {
                    tap: function() {
                        this.parent.restartTest();
                    }
                }
            }
        ]
    },
    
    restartTest: function() {
        ScrumButMobile.app.getController('Main').resetTest();
        this.parent.setActiveItem(0);
    }
});