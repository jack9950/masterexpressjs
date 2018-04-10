const express = require('express');
const bodyparser = require('body-parser');

const port = process.argv[2] || 1337;

const app = express();

app.use(bodyparser.urlencoded({extended: false}));

app.post('/form', function(req, res){

	let returnString = req.body.str.split('').reverse().join('');
	// console.log('returnString: ', returnString);
	res.end(returnString);
});

app.listen(port);