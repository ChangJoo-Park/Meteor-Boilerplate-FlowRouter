// Fixture data of boilerplate
Posts = new Mongo.Collection('posts');

PostSchema = new SimpleSchema({
	title: {
		type: String,
		label: 'Title',
	},
	content: {
		type: String,
		label: 'Content'
	},
	slug: {
		type: String,
		autoform: {
			type: 'hidden'
		}
	},
	author: {
		type: String,
		label: "Author",
		// autoValue: function() {
		// 	if(Meteor.userId()) {
		// 		return Meteor.userId();
		// 	}
		// },
		autoform: {
			type: 'hidden'
		}
	},
	createdAt: {
		type: Date,
		denyUpdate: true,
		autoValue: function() {
			return moment().toDate();
		},
		autoform: {
			type: 'hidden'
		}
	}
});

Posts.attachSchema(PostSchema);