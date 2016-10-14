var app = angular.module('app', []);

app.factory('productFactory', function(){
	var products = [
		{name: "Horn Shine", price: 14.95},
		{name: "Mane Ribbons", price: 2.99},
		{name: "Costume Wings - small", price: 130.00}
	];
	var factory = {};

	// Make sure to give the factory all the methods for the controller to call!
	
	factory.getProducts = function(callback) {
		callback(products);
	}
	factory.addProduct = function(newProduct, callback){
		products.push(newProduct);
		callback(products);
	}
	factory.deleteProduct = function(index, callback){
		products.splice(index, 1);
		callback(products);
	}
	return factory;
});

app.controller('productsController', ['$scope', 'productFactory', function($scope, productFactory){
	$scope.products = [];

	productFactory.getProducts(function(data) {
		$scope.products = data;
	})

	$scope.createProduct = function(){
		// Rather than simply add to the controller's scope, you need to give it to the factory!
		productFactory.addProduct($scope.newProduct, function(products){
			// Let's also give it a callback function that resets the products
			$scope.products = products;
		});
		$scope.newProduct= {};
	}
	$scope.deleteProduct = function(productDelete){
		// All we need to do in deleteProduct is tell the factory which product to delete!
		productFactory.deleteProduct(productDelete, function(products){
			// Let's also give it a callback function that resets the products
			$scope.products = products;
		});
	}

}])
