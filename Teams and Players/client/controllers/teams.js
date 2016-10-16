app.controller('TeamsController', function($scope){
	var ID = 1;
	$scope.teams = [];
	$scope.addTeam = function(){
		var newTeam = {
			id: ID,
			name: $scope.newTeamName,
		}
		ID++;
		$scope.teams.push(newTeam);
		$scope.newTeamName = '';
	}
	$scope.deleteTeam = function(id){
		TeamFactory.removeTeam(id);
		
	}
})