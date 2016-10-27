var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var CustomerSchema = new Schema({
	name: {type: String, required: true},
	createdAt: {type: Date, default: Date.now}
});

module.exports = mongoose.model("Customer", CustomerSchema);