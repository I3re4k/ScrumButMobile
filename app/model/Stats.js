Ext.define('ScrumButMobile.model.Stats', {
    extend: 'Ext.data.Model',
	
	/**
	 * Send the selected answer to the scrumbut server
	 */
	sendStats: function(value, question) {
	
		//Check if device is online if not do nothing
		if (false == window.navigator.onLine) {
			return false;
		}
		
		//Send stats to the scrumbut page with answerId and questionId
		Ext.Ajax.request({
			url: 'http://www.scrumbutt.me/index/edit',
			params: {
				'answers': value,
				'questionID': question,
			},
			method: 'POST',
			success: function(response){
			},
			failure: function(){}
		})
	}
});
