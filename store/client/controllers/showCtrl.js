App.controller('ShowController', function($scope, ProductFactory, $routeParams){
	function getProductById(){
		ProductFactory.getProduct($routeParams.id)
		.then(function(serverResponse){
			$scope.product = serverResponse.data;
			console.log(serverResponse.data);
		})
	}
	getProductById($routeParams.id);
})