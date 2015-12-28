Template.Posts.onCreated(function(){
	const self = this;
	const limit = 1;
	self.autorun(function(){
		self.subscribe('allPosts', limit);
	});
	Session.set('currentPage', limit);
});

Template.Posts.helpers({
	posts: function(){
		return Posts.find();
	}
});

Template.Posts.events({
	'click #loadMore': function(){
		let currentPage = Session.get('currentPage');
		Session.set('currentPage',++currentPage);
		Meteor.subscribe('allPosts', Session.get('currentPage'));
	}
});