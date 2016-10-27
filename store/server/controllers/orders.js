var Order = require('../models/order');
var Product = require('../models/product');

module.exports = {
	index: function(req, res){
		Order.find({})
		.populate('_customer _product')
		.exec(function(err, orders){
			if(err){
				res.json(err);
			}else{
				res.json(orders);
			}
		});
	},
	create: function(req, res){
		var quantityOrdered = parseInt(req.body.quantity),
			productID = req.body._product;

	Product.isQuantityAvailable(quantityOrdered, productID, function(result){
		if(result){
			Order.create(req.body, function(err, order){
				if (err){
					res.json(err);
				} else {
					res.json(order);
					console.log(order);
				}
			})
		}
	})
	},
	delete: function (req, res){
		Order.findById(req.params.id, function(err, order){
			if(err){
				res.json(err);
			} else {
				var quantityOrdered = parseInt(order.quantity)
				productID = order._product
				Product.returnQuality(quantityOrdered, productID, function(result){
					console.log(result);
					if (result){
						Order.remove(order, function(err, order){
							if (err){
								res.json(err);
							} else {
								res.json(order);
								console.log(order);
							}
						})
					}
				})
			}
		})
	}
}