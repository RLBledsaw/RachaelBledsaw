var App = angular.module('StoreModule', ['ngRoute']);

App.config(function($routeProvider){
	$routeProvider
		.when('/', {
			templateUrl: '/partials/home.html',
			controller: 'IndexController'
		})
		.when('/customers', {
			templateUrl: '/partials/customers.html',
			controller: 'CustomerController'
		})
		.when('/products', {
			templateUrl: '/partials/products.html',
			controller: 'ProductController'
		})
		.when('/products/:id',{
			templateUrl: '/partials/show.html',
			controller: 'ShowController'
		})
		.when('/orders', {
			templateUrl: '/partials/orders.html',
			controller: 'OrderController'
		})
		.otherwise({
			redirectTo: '/'
		})
})