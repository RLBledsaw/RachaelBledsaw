var express = require('express'),
	bp = require('body-parser'),
	port = 8000,
	app = express();

app.use(bp.urlencoded({extended:true}));
app.use(bp.json());
app.use(express.static(__dirname + "/client"));
app.use(express.static(__dirname + "/bower_components"));

require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);

app.listen(port, function(){
	console.log(`hearing you on ${port}`);
});