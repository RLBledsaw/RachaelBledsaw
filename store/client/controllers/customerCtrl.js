App.controller('CustomerController', function($scope, CustomerFactory, $location){
	$scope.customers = [];
	

	function fetchCustomers(){
		CustomerFactory.getCustomers()
		.then(function(serverResponse){
			$scope.customers = serverResponse.data;
		})
	}
	fetchCustomers();

	$scope.createCustomer = function(){
		CustomerFactory.createCustomer($scope.newCustomer)
		.then(function(serverResponse){
			console.log(serverResponse.data)
			$scope.newCustomer = {};
			fetchCustomers();
			$location.path('/customers');
		})
		.catch(function(error){
			console.log(error)
		})
	}

	$scope.removeCustomer = function(custId){
		CustomerFactory.removeCustomer(custId)
		.then(fetchCustomers)
	}
})