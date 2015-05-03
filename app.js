"use strict";
var express = require('express'),
	port = 80,
	app = express(),
	server = require('http').createServer(app),
	io = require('socket.io').listen(server);

var routes = require('./routes');

var path = require('path'),
	fs = require('fs');

var logFile = fs.createWriteStream('./logFile.log', {flags: 'a'});

var bodyParser = require('body-parser'),
	cookieParser = require('cookie-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cookieParser());

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.engine('jade', require('jade').__express);

app.get('/', routes.index);
app.get('/users', routes.users);

server.listen(port,function (){
	console.log('server is running on port: '+port);
});

module.exports = io;