Template.Posts.onCreated(function(){
	const self = this;
	self.autorun(function(){
		self.subscribe('allPosts');

	});
});

Template.Posts.onDestroyed(function(){
});

Template.Posts.helpers({
	posts: function(){
		return Posts.find();
	},
});

Template.Posts.events({

});