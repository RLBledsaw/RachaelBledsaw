var Product = require('../models/product');

module.exports = {
	index: function(req, res){
		Product.find({}, function(err, products){
			if(err){
				res.json(err);
			}else{
				res.json(products);
			}
		});
	},
	create: function(req, res){
		Product.create(req.body, function(err, product){
			if(err){
				res.json(err);
			} else {
				res.json(product);
				console.log(product);
			}
		})
	},
	show: function(req, res){
		Product.findById(req.params.id, function(err, product){
			console.log('getting product')
			console.log(req.params.id);
			if (err){
				res.json(err);
			} else {
				res.json(product);
				console.log(product)
			}
		})
	}
}