var mongoose = require('mongoose'),
	fs = require('fs'),
	path = require('path'),
	models_path = path.join(__dirname, "../models"),
	reg = new RegExp(".js$", "i"),
	dbURI = 'mongodb://localhost/mean_store';

mongoose.connect(dbURI);

mongoose.connection.on('connected', function(){
	console.log(`Mongoose default open`);
});

mongoose.connection.on('error', function(err){
	console.error(`Mongoose connection error`);
});

mongoose.connection.on('disconnected', function(){
	console.log(`Mongoose connection disconnected`);
});

process.on('SIGINT', function(){
	mongoose.connection.close(function(){
		console.log('Mongoose connection disconnected through app termination');
		process.exit(0);
	});
});

fs.readdirSync(models_path).forEach(function(file){
	if(reg.test(file)){
		require(path.join(models_path, file));
	}
});