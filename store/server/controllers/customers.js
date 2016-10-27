var Customer = require('../models/customer');

module.exports = {
	index: function(req, res){
		Customer.find({}, function(err, customers){
			if (err){
				res.json(err);
			} else {
				res.json(customers);
			}
		});
	},
	create: function(req, res){
		Customer.create(req.body, function(err, customer){
			if (err){
				res.json(err);
			} else {
				res.json(customer);
			}
		});
	},
	delete: function(req, res){
		Customer.remove({_id: req.params.id}, function(err){
			if(err){
				res.json(err);
			}else{
				res.json(true);
			}
		})
	}
}