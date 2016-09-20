var http = require('http');
var fs = require('fs');

var server = http.createServer(function(request, response){
	console.log("requested url:", request.url);
	//logging this probably isn't necessary, but it will help understand where commands are going.
	if(request.url === '/') {
		fs.readFile('index.html', 'utf8', function(errors, contents) {
			response.writeHead(200, {'Content-Type': 'text/html'});
			response.write(contents);
			response.end();
		});
	} 
	else if(request.url === '/ninjas.html') {
		fs.readFile('ninjas.html', 'utf8', function(errors, contents) {
			response.writeHead(200, {'Content-Type': 'text/html'});
			response.write(contents);
			response.end();
		});
	}
	else if(request.url === '/dojos/new.html') {
	//this seems clunky, should it?
		fs.readFile('dojos.html', 'utf8', function(errors, contents) {
			response.writeHead(200, {'Content-Type': 'text/html'});
			response.write(contents);
			response.end();
		});
	}
	else {
		//because 404 is boring to me right now...
		response.writeHead("Vanish!");
		response.end("Ninja vanish like smoke.")
	}
});

server.listen(8000);
//I adjusted the port number for my own comfort.