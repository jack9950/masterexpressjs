const express = require('express');
const stylus = require('stylus');

const folderLocation = process.argv[3] || __dirname + '/stylishcss'; 
const port = process.argv[2] || 1337

const app = express();
// console.log('__dirname: ', __dirname);
// console.log('port: ', port);
app.use(express.static(folderLocation));
app.use(stylus.middleware(folderLocation));

app.listen(port);