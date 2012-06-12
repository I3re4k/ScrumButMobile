Ext.define('ScrumButMobile.view.About', {
    extend: 'Ext.Panel',
    
    xtype: 'aboutPanel',
    config: {
        title: 'Impressum',
        iconCls: 'user',
        html: '<b>Entwickler</b><br>'+
			  'Dominik Borchardt <br>' +
			  '<a href="mailto:zerocool89@online.de">Email</a><br><br>' +
			  '<a href="https://github.com/I3re4k/ScrumButMobile">GitHub Repository</a> <br><br>' +
			  '<b> In Kooperation mit: </b><br>' +
			  '<a href="http://www.mayflower.de"> Mayflower GmbH </a><br><br>' +
			  '<b>Scrum But Test</b> <br>' +
			  '&copy; Jeff Sutherland',
			  
        
        items: [
            {
                xtype: 'headerPanel',
                title: 'Impressum'
            }
        ]
    }
    
})