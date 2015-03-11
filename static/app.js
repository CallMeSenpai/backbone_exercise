console.log("hi this is mr console");


var LocationView = Backbone.View.extend({
    el:"#location",
    template: _.template($("#location_template").html()),
    events: {
	"click #del" : function(e) {
	    this.remove();
	},
	"click #b-up" : function(e) {
	    var r = this.model.get("rating");
	    r = parseInt(r);
	    r++;
	    this.model.set('rating',r);
	    this.render();
	},
	"click #b-down" : function(e) {
	    var r = this.model.get("rating");
	    r = parseInt(r);
	    r--;
	    this.model.set('rating',r);
	    this.render();
	},
    },
    initialize:function(){
	this.render();
    },
    render: function(){
	var e = this.template(this.model.toJSON());
	this.$el.empty();
	this.$el.append(e);
	return this;
    }
});
var Location = Backbone.Model.extend({
    initialize: function(){
	this.on({"change":function() {
	    console.log("Changed"+this.toJSON())}});
    },
    defaults:{'name':'name goes here',
	      'rating':0},
    validate:function(attrs,options){
	if (isNaN(attrs.rating)){
	    return "Rating must be numeric";
	}
    }
});

var p1 = new Place({name:"Terry's", rating:5});
var p2 = new Place({name:"Ferry's", rating:7});
var v1 = new PlaceView({model:p1});
