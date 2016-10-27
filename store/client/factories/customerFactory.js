App.factory('CustomerFactory', function($http){
	var factory = {};

	factory.getCustomers = function(){
		return $http.get('/customers')
	}

	factory.createCustomer = function(newCustomer){
		return $http.post('/customers', newCustomer)
	}

	factory.removeCustomer = function(id){
		return $http.delete(`/customers/${id}`)
	}

	return factory;
})