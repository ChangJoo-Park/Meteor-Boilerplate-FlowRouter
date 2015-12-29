Meteor.publish('allPosts', function(limit) {
	return Posts.find({}, {
		sort: {
			createdAt: -1
		},
		fields: {
			slug: 1,
			title: 1,
			summary: 1,
			createdAt: 1
		}
	});
});

Meteor.publish('singlePost', function(slug) {
	return Posts.find({
		slug: slug
	});
});

Meteor.publish('editPost', function(id) {
	return Posts.find({
		_id: id
	});
});