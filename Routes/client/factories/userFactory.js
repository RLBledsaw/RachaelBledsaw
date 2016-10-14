app.factory('userFactory', function(){
	var users = [
		{fname: "Babs", lname: "Gordon", favLang: "Javascript"},
		{fname: "Richard", lname: "Grayson", favLang: "English"}
	];
	var factory = {};

	factory.getUsers = function(callback) {
		callback(users);
	}

	factory.addUser = function(newUser, callback){
		users.push(newUser);
		callback(users);
	}

	factory.index = function(callback) {
		callback(users);
	}

	factory.deleteUser = function(id, callback){
		users.splice(id, 1);
		callback(users);
	}

	return factory;
});