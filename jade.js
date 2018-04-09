const jade = require('jade');
const express = require('express');
const path = require('path');

const port = process.argv[2];
const template = process.argv[3] || path.join(__dirname, 'templates');

const app = express();
app.set('view engine', 'jade');
app.set('views', template);

app.get('/home', function(req, res){
	res.render('index', {date: new Date().toDateString()});
});

app.listen(port);