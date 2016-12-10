var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var FriendSchema = new Schema({
	firstName: String,
	lastName: String,
	dob: String
}, {timestamps: true});

module.exports = mongoose.model("Friend", FriendSchema);