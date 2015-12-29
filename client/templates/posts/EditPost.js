Template.EditPost.onCreated(function() {
	Session.set('currentPost', undefined);
	const self = this;
	self.autorun(function() {
		const id = FlowRouter.getParam('id');
		self.subscribe('editPost', id);
	});
});

Template.EditPost.helpers({
	post: function() {
		post = Posts.find().fetch();
		Session.set('currentPost', post[0]);
		return post[0];
	},
});