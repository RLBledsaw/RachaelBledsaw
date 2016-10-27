var Customer = require('../controllers/customers'),
	Product = require('../controllers/products'),
	Order = require('../controllers/orders');

module.exports=function(app){
	app.get('/', function(req, res){
		res.sendFile(__dirname + '../../client/index.html')
	});

	app.get('/customers', Customer.index);
	app.post('/customers', Customer.create);
	app.delete('/customers/:id', Customer.delete);
	app.get('/products', Product.index);
	app.post('/products', Product.create);
	app.get('/products/:id', Product.show);
	app.get('/orders', Order.index);
	app.post('/orders', Order.create);
	app.delete('/orders/:id', Order.delete);
}