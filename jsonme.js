const express = require('express');
const fs = require('fs');

const port = process.argv[2] || 1337;
const bookLocation = process.argv[3] || __dirname + '/test.txt';
console.log('bookLocation: ', bookLocation);

const app = express();
// var book = "";

app.get('/books', function(req, res){
	fs.readFile(bookLocation, (err, data) => {
		if (err) throw err;
		book = JSON.parse(data);
		// res.send(data);
		res.json(book);
	});
	
});

app.listen(port);