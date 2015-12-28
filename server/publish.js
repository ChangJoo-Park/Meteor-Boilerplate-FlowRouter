Meteor.publish('allPosts', function (limit) {
	const increment = 5;
	const numOfLoads = limit * increment;
	return Posts.find({}, { limit: numOfLoads });
});

Meteor.publish('singlePost', function(slug){
	return Posts.find({slug: slug});
});