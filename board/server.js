var express = require('express'),
	mongoose = require('mongoose'),
	path = require('path'),
	bodyParser = require('body-parser'),
	port = 8000;

var app = express();

// Begin dependencies
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, "./static")));
app.set("views", path.join(__dirname, "./views"));
app.set("view engine", "ejs");

//Begin mongoose
mongoose.connect('mongodb://localhost/message_board');

var Schema = mongoose.Schema;

var PostSchema = new mongoose.Schema({
	name: {type: String, required: true, minlength: 4},
	message: {type: String, required: true}
	comment: [{type: Schema.Types.ObjectId, ref: 'Comment'}]
}, {timestamp: true});

var CommentSchema = new mongoose.Schema({
	name: {type: String, required: true, minlength: 4},
	comment: {type: String, required: true},
	_post: {type: Schema.Types.ObjectId, ref:'Post'}
}, {timestamp: true});

var Post = mongoose.model('Post', PostSchema);
var Comment = mongoose.model('Comment', CommentSchema);


//Begin routing
var errors = [];

app.get('/', function(req, res){
	Post.find({})
	.populate('comments')
	.exec(function(err, posts){
		console.log(posts);
		res.render("index", {posts: posts, errors: errors});
	})
});

app.post('/message', function(req, res){
	Post.create(req.body, function(err, post){
		if(err) {
			if(err.errors.name) {
				errors.push("Name is required");
			}
			if(err.errors.message) {
				errors.push("Don't you have something to say?");
			}
			console.log(errors);
			res.render("index", {errors: errors});
		} else {
			res.redirect('/');
		}
	})
});

app.post('/comment/:id', function(req, res){
	Post.find(req.params.id, function(err, post){
		var comment = new Comment(req.body);
		comment._post = post._id;
		console.log(comment);
		post.comments.push(comment);
		comment.save(function(err){
			post.save(function(err){
				if(err){
					console.log("computer says no.");
				} else {
					res.redirect('/');
				}
			})
		})
	})
})

app.listen(port,function(){
	console.log(`hearing you on ${port}`);
});