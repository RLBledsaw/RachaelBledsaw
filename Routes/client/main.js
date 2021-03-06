var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
		.when ('/', {
			templateUrl: 'static/partials/customizeUsers.html',
			controller: 'CustomizeUsersController'
		})
		.when ('/users', {
			templateUrl: 'static/partials/userList.html',
			controller: 'UserListsController'
		})
		.otherwise({
			redirectTo: '/'
		});
})
