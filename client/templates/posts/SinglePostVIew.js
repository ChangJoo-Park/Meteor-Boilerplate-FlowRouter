Template.SinglePostView.onCreated(function() {
	Session.set('currentPost', undefined);
	const self = this;
	self.autorun(function() {
		const slug = FlowRouter.getParam('slug');
		self.subscribe('singlePost', slug);
	});
});

Template.SinglePostView.helpers({
	post: function() {
		post = Posts.find().fetch();
		Session.set('currentPost', post[0]);
		return post[0];
	},
	isOwner: function() {
		return Meteor.userId() === Session.get('currentPost').author;
	}
});

Template.SinglePostView.events({
	'click #deletePostButton': function() {
		console.log("BABCD");
	}
});