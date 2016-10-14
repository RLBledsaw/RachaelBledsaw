app.controller('CustomizeUsersController', ['$scope', 'userFactory', function($scope, userFactory){
	
	function setUsers(data){
		$scope.users = data;
	}

	$scope.users = {};
	$scope.users = [];

	$scope.index = function(){
		userFactory.index(setUsers)
	}

	$scope.index();
	$scope.createUser = function(){
		userFactory.addUser($scope.newUser, setUsers);
	}
	$scope.deleteUser = function(idx){
		userFactory.deleteUser(idx, setUsers);
	}
}
]);