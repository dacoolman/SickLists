//get http protocol
var http = require('http');
//require express//
var express = require('express');
//access express application
var app = express();
//for post data
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
//setup client files
app.use(express.static(__dirname + "/client"));

require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);

var server = app.listen(8000, function(){
	console.log('We are live on port 8000!')
	
});