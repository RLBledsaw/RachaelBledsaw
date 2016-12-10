mApp.controller('showController', ['$scope', 'friendsFactory', '$routeParams', function($scope, friendsFactory, $routeParams){
	function getFriendById(id){
		friendsFactory.getFriend(id)
		.then(function(serverResponse){
			$scope.friend=serverResponse.data;
		})
	}
	getFriendById($routeParams.id);
}])