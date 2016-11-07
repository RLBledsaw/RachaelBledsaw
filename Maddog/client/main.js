var mdmapp = angular.module('mdmapp', ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
		.when('/', {
			templateUrl: 'maddog.html',
			controller: 'IndexCtrl'
		})
		.when('/zprep', {
			templateUrl: 'partials/classes/zprep.html', 
			controller: 'zprepCtrl'
		})
		.when('/momandme', {
			templateUrl: 'partials/classes/momandme.html', 
			controller: 'momandmeCtrl'
		})
		.when('/stem', {
			templateUrl: 'partials/classes/stem.html', 
			controller: 'stemCtrl'
		})
		.when('/superhero', {
			templateUrl: 'partials/classes/superhero.html', 
			controller: 'superheroCtrl'
		})
		.when('/abtime', {
			templateUrl: 'partials/classes/abtime.html', 
			controller: 'abtimeCtrl'
		})
		.when('/psession', {
			templateUrl: 'partials/psession.html', 
			controller: 'psessionCtrl'
		})
		.when('/realstory', {
			templateUrl:'partials/realstory.html', 
			controller: 'realstoryCtrl'
		})
		.otherwise({
			redirectTo: '/'
		})
})