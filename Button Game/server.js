var express = require('express'),
	port = 8000;

var app = express();

app.use(express.static(__dirname, + "/bower_components"));

app.get('/', function(req, res){
	res.sendFile(__dirname + "/views/index.html");
});

var server = app.listen(port, function(){
	console.log("Hearing you on " + port);
});
//had trouble keeping track of the files, so moved it back to server. Should probably take some time to rework work flow for myself
var io = require('socket.io').listen(server)
var count = 0;
io.sockets.on('connection', function(socket){
	console.log("This. Is. Sockets!");
	socket.on('increase_clicked', function(data){
		count += 1;
		io.emit('count', {count:count});
	})
	socket.on('reset_clicked', function(){
		count = 0;
		io.emit('count', {count: count})
	})
})
/* I understand the code when I read it and when I see others typing it, but I 
struggle a lot when trying to put this together. I would appreciate any books,
blogs, or pages (outside the documentation, please) that I can dig into to help me
understand socket more. Belt or no, this would be a gold star to be able to claim on my cv */