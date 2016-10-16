app.controller("AssociationsController", function($scope, PlayerFactory, TeamFactory){
	$scope.players = [];
	$scope.teams = [];

	PlayerFactory.getPlayers(function(players){
		$scope.players = players;
	})

	TeamFactory.getTeams(function(players){
		$scope.teams = teams;
	})

	$scope.addPlayerToTeam = function() {
		PlayerFactory.addPlayerToTeam($scope.newAssoc);
	}

	$scope.removePlayerFromTeam = function(id) {
		PlayerFactory.removePlayerFromTeam(id);
	}
})