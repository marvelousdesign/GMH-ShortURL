// require and instantiate express
var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');

//Middle-ware for everything below//
app.use(bodyParser());

app.use('/', express.static(__dirname + '/'));

app.get('/', function(req, res){
  // route to serve up the homepage (index.html)
  resp.sendFile('index.html', {root: path.join(__dirname + './assets')});
});

app.post('/', function(req, res){
  // route to create and return a shortened URL given a long URL
//   resp.sendFile('index.html', {root: path.join(__dirname + './assets')});


});


var server = app.listen(3000, function(){
  console.log('Server listening on port 3000');
});