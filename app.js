// Requires \\
var express = require('express');
var bodyParser = require('body-parser');

// Create Express App Object \\
var app = express();

// Application Configuration \\
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

// Routes \\
app.get('/', function(req, res){
  res.sendFile('home.html', {root:('./public')})
});

// Creating Server and Listening for Connections \\
var port = 80 
app.listen(port, function(){
  console.log('Server running on port ' + port);

})