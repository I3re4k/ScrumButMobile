Ext.define('ScrumButMobile.model.Model', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            'id', 'title', 'text', 'points'
        ]
    }
});

var store = Ext.create('Ext.data.Store', {
    model: 'ScrumButMobile.model.Model',
    proxy: {
        type: 'ajax',
        url : 'data.json',
        reader: {
            type: 'json'
        }
    }
});
