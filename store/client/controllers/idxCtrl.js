App.controller('IndexController', function($scope, ProductFactory, CustomerFactory, OrderFactory){
	$scope.products = [];
	$scope.orders = [];
	$scope.customers = [];

	function getAllProducts(){
		ProductFactory.getProducts()
		.then(function(serverResponse){
			$scope.products = serverResponse.data;
		})
	}

	getAllProducts();

	function getAllCustomers(){
	CustomerFactory.getCustomers()
	.then(function(serverResponse){
		$scope.customers = serverResponse.data;
		})
	}

	getAllCustomers();

	function getOrders(){
		OrderFactory.getOrders()
		.then(function(serverResponse){
			$scope.orders = serverResponse.data;
		})
	}
	
	getOrders();
})