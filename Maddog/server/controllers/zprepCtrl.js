var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport();

exports.sendMail = function(req, res) {
	var data = req.body;

	transporter.sendMail({
		from: data.zEmail,
		to: 'test@test.com',
		subject: 'Please add' + data.zName + "to the Zombie Apocoprep waitlist",
		text: data
	});

	res.json(data);
};