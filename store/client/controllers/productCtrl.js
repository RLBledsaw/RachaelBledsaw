App.controller('ProductController', function($scope, ProductFactory, $location){
	$scope.products = [];

	function getAllProducts(){
		ProductFactory.getProducts()
		.then(function(serverResponse){
			$scope.products = serverResponse.data;
		})
	}
	getAllProducts();

	$scope.createProduct = function(){
		ProductFactory.createProduct($scope.newProduct)
		.then(function(serverResponse){
			$scope.newProduct = {}; 
			$location.path('/');
		})
		.catch(function(error){
			console.log(error)
		})
	}

})