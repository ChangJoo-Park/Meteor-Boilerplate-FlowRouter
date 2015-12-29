FlowRouter.route('/',{
	name: 'home',
	action: function() {
		BlazeLayout.render("HomeLayout");
	}
});

FlowRouter.route('/posts',{
	name: 'posts',
	action: function() {
		BlazeLayout.render("HomeLayout", { main: "Posts" });
	}
});

FlowRouter.route('/posts/:slug',{
	name: 'singlepost',
	action: function() {
		BlazeLayout.render("HomeLayout", { main: "SinglePostView" });
	}
});

FlowRouter.route('/posts/:id/edit',{
	name: 'editpost',
	action: function() {
		BlazeLayout.render("HomeLayout", { main: "EditPost" });
	}
});

FlowRouter.route('/about',{
	name: 'about',
	action: function() {
		BlazeLayout.render("HomeLayout", { main: "About" });
	}
});

