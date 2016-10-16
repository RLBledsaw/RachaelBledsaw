app.controller('PlayersController', function($scope, PlayerFactory){

	function getPlayers(){
		PlayerFactory.getPlayers(function(data){
			$scope.players = data;
		});
	}

	getPlayers();

	$scope.addPlayer = function(){
		PlayerFactory.addPlayer($scope.newPlayerName, function(players){
			$scope.players = players;
			$scope.newPlayerName = '';
		})
	}

	$scope.deletePlayer = function(id){
		PlayerFactory.removePlayer(id);
		
	}
})