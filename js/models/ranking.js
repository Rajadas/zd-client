//      Zombie Dice client. Made by Igor Soarez and João Duarte for lxjs 2012

//      This is the Ranking model.
//      It represents the game global player ranking.

var Ranking = Backbone.Model.extend({
    urlRoot: Config.baseURL + '/ranking',

    initialize: function(){
        
    },

    update: function(){
    	this.fetch();
    }
});