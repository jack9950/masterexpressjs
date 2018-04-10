const express = require('express');
const crypto = require('crypto');
const port = process.argv[2] || 1337;

const app = express();

app.put('/message/:NAME', function(req, res){
	let id = req.params.NAME;
	let hash = crypto.createHash('sha1').update(new Date().toDateString() + id).digest('hex');
	res.send(hash);
});

app.listen(port);