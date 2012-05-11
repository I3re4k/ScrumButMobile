Ext.define('ScrumButMobile.model.Result', {
    extend: 'Ext.data.Model',
    
    /**
     * Average Resultscore 
     *
     * @var Int
     */
    averageScore: 50,
    
    /**
     * Creates the Resultpage Text and returns it
     *
     * @param score     The current Score
     * @return String
     */
    getResultPageText: function(score) {
        var comment = this.getResultComment(score);
        var text = "Erreichte Punkte: " + score + "<br>" +
                   "Durschnittliche Punkte: " + this.averageScore + "<br>" +
                   comment;
        return text;
    },
    
    /**
     * Gets the comment for the Resultpage based on the current Score
     * 
     * @param score     The current Score, used for getting the comment 
     * @return String
     */
    getResultComment: function(score) {
		
		var comment = "Könnte besser sein"; 
		
		if (this.averageScore < score) {
			comment = "Glückwunsch!"; 
		} 
			
        return comment;
    }
});