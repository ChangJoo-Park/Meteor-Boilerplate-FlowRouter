FlowRouter.route('/',{
	name: 'home',
	action: function() {
		BlazeLayout.render("HomeLayout");
	}
});