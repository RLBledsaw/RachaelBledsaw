var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
		.when('/players', {templateUrl: 'partials/players.html', controller: 'PlayersController'})
		.when('/teams', {templateUrl: 'partials/teams.html', controller: 'TeamsController'})
		.when('/associations', {templateUrl: 'partials/associations.html'})
		.otherwise({
			redirectTo: '/players'
		})
})

/*
Charlie,
This is the same note I'm sending you once I post this on GitHub. If you read that, ignore this. No need to read my babble more than once.
I am still having that problem where Angular is not being recognized by my system, so much of the code here is best guess based on previous work. Since this is such an unusual problem, and since I can only guess at possible solutions, I would be really grateful if we could do the code review in person or via zoom so I can sort out the errors and learn from this ^_^. Don't really want to be a pain, but I  feel like I'm right on the edge of Angular clicking. Thanks.
*/
