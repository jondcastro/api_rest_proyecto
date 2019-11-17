// var express = require('express');
// // var app = express();

// const router = express.Router();


// router.get('/', function (req, res) {
//   res.send('Hello World!');
// });

var express = require('express');
var app = express();


// app.get('/', function (req, res) {
// 	res.send('Hello World!');
// });


module.exports = {

	mo:app.get('/', function (req, res) {
		res.send('Hello World!');
	})

};


// module.exports = app;
