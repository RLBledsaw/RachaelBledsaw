app.controller('UserListController', ['$scope', 'userFactory', function($scope, userFactory){
	function setUsers(data){
		$scope.users = data;
	}
	
	$scope.users = [];

	userFactory.index(setUsers);

}
]);