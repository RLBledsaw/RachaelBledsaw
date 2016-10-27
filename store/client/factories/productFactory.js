App.factory('ProductFactory', function($http){
	var factory = {};

	factory.getProducts = function(){
		return $http.get('/products')
	}
	factory.getProduct = function(id){
		return $http.get(`/products/${id}`)
	}
	factory.createProduct = function(newProduct){
		return $http.post('/products', newProduct)
	}
	factory.updateProduct = function(newOrder){
		return $http.put('/products', newOrder)
	}
	return factory;
})