mApp.controller('indexController', ['$scope', 'friendsFactory', function($scope, friendsFactory){
	$scope.friends = [];

	function getAndAssignFriends(){
		friendsFactory.getFriends()
		.then(function(serverResponse){
		$scope.friends = serverResponse.data;
		})
	}

	getAndAssignFriends();

	$scope.deleteFriend = function(id){
		friendsFactory.deleteFriend(id)
		.then(getAndAssignFriends)
	}
}])