var ex = require('express');
var path = require('path');
var cors = require('cors');
var http = require('http');
var fs = require('fs');
var app = ex();

app.use(cors());
app.use(ex.static(path.join(__dirname, '/public')));

app.get('/index', function (req, res) {
res.writeHead(200, { 'Content-Type': 'application/json' });
res.json({msg: "Hello World"});	
});


app.listen(parseInt(process.argv[2]) || 1337);