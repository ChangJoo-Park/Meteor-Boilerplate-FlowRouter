Meteor.publish('allPosts', function () {
	return Posts.find();
});

Meteor.publish('singlePost', function(slug){
	return Posts.find({slug: slug});
});