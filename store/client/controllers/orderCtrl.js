App.controller('OrderController', function($scope, CustomerFactory, ProductFactory, OrderFactory, $location){
	$scope.customers = [];
	$scope.products = [];
	$scope.orders = [];

	function getAllCustomers(){
	CustomerFactory.getCustomers()
	.then(function(serverResponse){
		$scope.customers = serverResponse.data;
		})
	}
	
	getAllCustomers();

	function getAllProducts(){
	ProductFactory.getProducts()
	.then(function(serverResponse){
		$scope.products = serverResponse.data;
		})
	}
	
	getAllProducts();


	function getOrders(){
		OrderFactory.getOrders()
		.then(function(serverResponse){
			$scope.orders = serverResponse.data;
		})
	}

	getOrders();

	$scope.createOrder = function(){
		OrderFactory.createOrder($scope.newOrder)
		.then(function(serverResponse){
			console.log(serverResponse.data)
			$scope.newOrder = {};
			getOrders();
			$location.path('/orders');
		})

		.catch(function(err){
			console.log(err);
		})
	}

	$scope.deleteOrder = function(id){
		OrderFactory.deleteOrder(id)
		.then(getOrders)
	}
})