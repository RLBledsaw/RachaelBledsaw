app.factory("TeamFactory", function(){
	var ID = 1,
		teams = [];

	var factory = {};

	factory.addTeam = function(newTeamName, callback){
		var newTeam = {
			id: ID,
			name: newTeamName,
			team: ''
		}
		ID++;
		teams.push(newTeam);
		callback(players);
	}
	factory.getTeams = function(callback){
		callback(players);
	}

	factory.removeTeam = function(id){
		$scope.teams = $scope.teams.filter(function(team){
			if(team.id === id) {return false;}
			else{return true;}
		});
	}
	return factory;
})