console.log('Friends Factory');

mApp.factory('friendsFactory', ['$http', function($http){
	
	var factory = {};
	
	factory.createFriend = function(newFriend){
		return $http.post('/friends', newFriend)	
	}

	factory.getFriends = function(){
		return $http.get('/friends')
	}
	
	factory.updateFriend = function(id, friend){
		return $http.put(`/friends/${id}`, friend)
	}

	factory.deleteFriend = function(id){
		return $http.delete(`/friends/${id}`)
	}

	factory.getFriend = function(id){
		return $http.get(`/friends/${id}`)
	}
	
return factory;
}])