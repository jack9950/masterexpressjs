const express = require('express');

const port = process.argv[2] || 1337;

const app = express();
// console.log('test');
console.log('port: ', port);

// app.get('/search/:NAME', function(req, res){
// 	// console.log('another test');
// 	// let parameters = req.params.NAME.split('&');
// 	let parameters = req.params.NAME.toString().split('&');
// 	// console.log('another test');
// 	// console.log('parameters: ', parameters);
// 	res.send(parameters);
// });

//This came from a web search
app.get('/search', function(req, res){

	let query = req.query;
	res.send(query);
});

app.listen(port);