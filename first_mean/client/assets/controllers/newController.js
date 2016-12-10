mApp.controller('newController', ['$scope', 'friendsFactory', '$location', function($scope, friendsFactory, $location){
	$scope.createFriend = function(){
		friendsFactory.createFriend($scope.newFriend)
		.then(function (serverResponse){
			console.log(serverResponse.data)
			$scope.newFriend = {};
			$location.path('/');
		})
		.catch(function(error){
			console.log(error)
		})
	}
}]);