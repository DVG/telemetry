var RoomController = RouteController.extend({
	template: "home",
	data: {
		messages: function() {
			return Messages.find({}, {sort: {order:1}});
		}
	},
	action: function() {
		Session.set("currentRoom", this.params._id);
		this.render();
	}
});

Router.map(function(){
	this.route("room", {
		path: "/room/:_id",
		controller: RoomController
	})
});