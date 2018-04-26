// require and instantiate express
var express = require('express');
var path = require('path');
const cors = require ('cors');
var app = express();
var bodyParser = require('body-parser');

//Middle-ware for everything below//
app.use(bodyParser());

app.use('/', express.static(__dirname + '/'));

app.use(cors());

// app.get('/', function(req, res){
//   // route to serve up the homepage (index.html)
//   res.sendFile('index.html', {root: path.join(__dirname + './assets')});
// });

app.get('/', function(req, res){
  // route to serve up the homepage (index.html)
  // res.sendFile('index.html', {root: path.join(__dirname + './assets')});
  res.status(200).send("hi there")
});

app.post('/', function(req, res){
  // route to create and return a shortened URL given a long URL
//   resp.sendFile('index.html', {root: path.join(__dirname + './assets')});
res.status(201).send(req.body)


});


var server = app.listen(3000, function(){
  console.log('Server listening on port 3000');
});