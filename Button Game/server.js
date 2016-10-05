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
/*
Would love to see you refactor this so that it's in another file! Here's a head start:
*/
var functionExportedFromSocketFile = require('./sockets');

// What does the functionExportedFromSocketFile need?

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

// Before I recommend resources, it's important to pinpoint where the gap in understanding is. Let's schedule a 1:1 session to talk this through.
