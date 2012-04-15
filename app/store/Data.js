Ext.define('ScrumButMobile.store.Data', {
    extend: 'Ext.data.Store',
    storeId: 'Data',
    
    config: {
        model: 'ScrumButMobile.model.Data',
        proxy: {
            type: 'ajax',
            url : 'ressources/data.json',
            reader: {
                type: 'json'
            }
        },
        autoLoad: true
    }
    
    

})