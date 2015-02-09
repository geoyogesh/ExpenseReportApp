var http = require('http');
var express = require('express');
var app = express();
var controllers = require('./controllers');

//setup the view engine
app.set("view engine", "vash");

// set the public static resources folder
app.use(express.static(__dirname + "/public"));

// Map the routes
controllers.init(app);
var port = process.env.port || 1337;
var server = http.createServer(app).listen(port);