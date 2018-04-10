const express = require('express');
const bodyparser = require('body-parser');

const port = process.argv[2] || 1337;

const app = express();

app.use(bodyparser.urlencoded({extended: false}));

app.post('/form', function(req, res){

	// console.log('request: ', req);
	// console.log("req.body", req.body);
	// console.log("req.body.str", req.body.str);
	// console.log("req.body.name", req.body.name);

	let returnString = req.body.name.split('').reverse().join('');
	// console.log('returnString: ', returnString);
	res.end(returnString);
});

app.listen(port);