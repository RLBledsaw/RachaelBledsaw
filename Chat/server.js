var express = require('express'),
	path = require('path'),
	port = 8000;

var app = express();

app.use(express.static(path.join(__dirname, "./static")));
app.set('views', path.join(__dirname, './views'));

app.get('/', function (req, res){
	res.sendFile(__dirname + '/index.html');
});

var server = app.listen(port, function(){
	console.log(`listening on ${port}`);
})