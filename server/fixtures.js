var userId = "";
if (_.isEqual(Meteor.users.find().count(), 0)) {
	console.log("No user found. create Admin Account");
	userId = Accounts.createUser({
		email: "admin@example.com",
		password: 'adminexample',
		profile: {
			name: "Admin"
		}
	});
} else {
	userId = Meteor.users.findOne()._id;
}

if (_.isEqual(Posts.find().count(), 0)) {
	console.log("No posts found. create fixture posts");
	_(100).times(function(index) {
		var t = faker.lorem.sentence(_.random(2, 4));
		var c = faker.lorem.paragraphs(_.random(20, 30))
		Posts.insert({
			title: t,
			content: c,
			summary: _.truncate(c, 100),
			slug: _.slugify(t),
			author: userId,
		});
	});
}