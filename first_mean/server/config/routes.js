
//code up here to contact controller for friends.js -- exact syntax unclear
var Friend = require('../controllers/friends');

module.exports=function(app){
	app.get('/', function(req, res){
		res.sendFile(__dirname + '../../client/index.html')
	});

	app.get('/friends', Friend.index);
	app.post('/friends', Friend.create);
	app.get('/friends/:id', Friend.show);
	app.put('/friends/:id', Friend.update);
	app.delete('/friends/:id', Friend.delete);
};

