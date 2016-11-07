var zprep = require('../controllers/zprepCtrl');

module.exports=function(mdmapp){
	mdmapp.get('/', function(req, res){
		res.sendFile(__dirname + '../../client/maddog.html')
	});

	//place routes here
	mdmapp.route('/zprepform').post(zprep.sendMail);
};