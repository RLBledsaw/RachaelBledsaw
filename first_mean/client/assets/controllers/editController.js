mApp.controller('editController', ['$scope', 'friendsFactory', '$routeParams', '$location', function($scope, friendsFactory, $routeParams, $location){
	var ID = $routeParams.id;
	$scope.friend = {};

	friendsFactory.getFriend(ID)
		.then( function(serverResponse){
		$scope.friend = serverResponse.data;
		});

		$scope.updateFriend = function(){
			friendsFactory.updateFriend(ID, $scope.friend)
			.then(function(){
				$location.path('/');
			})
		}
}])