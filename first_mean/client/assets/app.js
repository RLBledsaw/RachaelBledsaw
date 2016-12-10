var mApp = angular.module('mApp', ['ngRoute']);

mApp.config(function ($routeProvider){
	$routeProvider
		.when('/', {
			templateUrl: "partials/home.html",
			controller: "indexController"
		})
		.when('/new', {
			templateUrl:"partials/new.html",
			controller: "newController"
		})
		.when('/:id/edit', {
			templateUrl: "partials/edit.html",
			controller: "editController"
		})
		.when('/:id', {
			templateUrl: "partials/show.html",
			controller: "showController"
		})
		.otherwise({
			redirectTo: '/'
		})		
});