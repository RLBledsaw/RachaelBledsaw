app.factory("PlayerFactory", function(){
	var ID = 1,
		players = [];

	var factory = {};

	factory.addPlayer = function(newPlayerName, callback){
		var newPlayer = {
			id: ID,
			name: newPlayerName,
			team: ''
		}
		ID++;
		players.push(newPlayer);
		callback(players);
	}
	factory.getPlayers = function(callback){
		callback(players);
	}
	factory.removePlayer = function(id){
		$scope.players = $scope.players.filter(function(player){
			if(player.id === id) {return false;}
			else{return true;}
		});
	}

	factory.addPlayerToTeam = function(data) {
		players[data.playerID].team = data.team;
	}

	factory.removePlayerFromTeam = function(id){
		players[id].team = "";
	}
	return factory;
})