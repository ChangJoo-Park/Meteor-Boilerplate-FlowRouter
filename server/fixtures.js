var userId = "";
if(_.isEqual(Meteor.users.find().count(), 0)){
		userId = Accounts.createUser({
			email: "admin@example.com",
			password: 'adminexample',
			profile: { name: "Admin" }
		});
} else {
	userId = Meteor.users.findOne()._id;
}

if(_.isEqual(Posts.find().count(), 0)){
	_(100).times(function(index){
		var t = Fake.sentence(_.random(2,4));
		Posts.insert({
			title: t,
			content: Fake.paragraph(_.random(3,5)),
			slug: _.slugify(t),
			author: userId,
		});
	});
}