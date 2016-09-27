/*
Rachael -- Works just great, nice job. A few things:

-- On your comment regarding attempting to re-direct: I love the idea. It's best practice not to render from a post method, so you're exactly right in trying to redirect the HTTP request. That probably means another route -- go ahead and refactor your code (the challenge being how to persist the form data!).

-- Your gitignore.txt file actually HAS TO BE NAMED .gitignore for it to work (I've made that change)

-- Your package.json file should be at the root level (I've made that change)
*/

var express = require('express'),
	path = require('path'),
	bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
	res.render('index');
});
// shows the survey form

app.post('/result', function(req, res) {
	formInfo = {
		name: req.body.name,
		location: req.body.location,
		language: req.body.language,
		comment: req.body.comment
	};
	res.render('result', {survey: formInfo});
});
// processes and displays the survey form
//I attempted to use redirect here, and got an error. Do I need to create a third route?

app.listen(8000, function(){
	console.log("Hearing you on 8000");
});
