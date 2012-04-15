Ext.define('ScrumButMobile.model.Result', {
    extend: 'Ext.data.Model',
    
    averagePoints: 50,
    
    getResultPageText: function(score) {
        var comment = this.getResultComment(score);
        var text = "Erreichte Punkte: " + score + "</br>" +
                   "Durschnittliche Punkte: " + this.averagePoints + "</br>" +
                   comment;
        return text;
    },
    
    getResultComment: function(score) {
        var comment = "Könnte besser sein";
        
        return comment;
    }
});