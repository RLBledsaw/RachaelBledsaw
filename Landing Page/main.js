var http = require('http');
var fs = require('fs');

var server = http.createServer(function(request, response){
	console.log("requested url:", request.url);
	//logging this probably isn't necessary, but it will help understand where commands are going.
	// Charlie: Fair enough!

	/*
	***************** CODE REVIEW NOTES ********************
	Great job on this. Server catches the relevant routes and deliveres the requisite page. However, as you noticed, some of the code is a bit clunky -- quite a bit of our code base is duplicative! In order not to repeat ourselves, let's think about the different pieces of data that could be different:

	1. The url
	2. The file we want to serve

	And not much else! If that's the case, can you refactor your code so that we're using fs.readFile( etc... ) only once?

	Nice job!
	***************** END NOTES ****************************
	*/


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
		response.writeHead(404);
		/*
		response.writeHead("Vanish!");
		Charlie:
		Careful! Node doesn't like this status code!
		throw new RangeError(`Invalid status code: ${statusCode}`);
		*/
		response.end("Ninja vanish like smoke.")
	}
});

server.listen(8000);
