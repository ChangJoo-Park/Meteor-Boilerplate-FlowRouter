Template.SinglePostView.onCreated(function(){
	Session.set('currentPost', undefined);
	const self = this;
	self.autorun(function(){
		let slug = FlowRouter.getParam('slug');
		self.subscribe('singlePost', slug);
	});
});

Template.SinglePostView.helpers({
	post: function(){
		post = Posts.find().fetch();
		Session.set('currentPost', post[0]);
		return post[0];
	},
	readableCreatedDateTime: function() {
		return moment(Session.get('currentPost').createdAt).format('l LT');
	}
});

Template.SinglePostView.events({

});