var app = angular.module('app', []);

app.factory('productFactory', function(){
	var products = [
		{name: "Horn Shine", price: 14.95},
		{name: "Mane Ribbons", price: 2.99},
		{name: "Costume Wings - small", price: 130.00}
	];
	var factory = {};
	factory.getProducts = function(callback) {
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
		$scope.products.push($scope.newProduct);
		$scope.newProduct= {};
	}
	$scope.deleteProduct = function(productDelete){
		$scope.products = $scope.products.filter(function(productOb){
			return productOb !== productDelete;
		})
	}

}])