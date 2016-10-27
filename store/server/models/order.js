var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var OrderSchema = new Schema({
	_customer: {type: Schema.Types.ObjectId, ref: 'Customer'},
	_product: {type: Schema.Types.ObjectId, ref: 'Product'},
	quantity: Number,
	createdAt: {type: Date, default: Date.now()}
});

module.exports = mongoose.model("Order", OrderSchema);