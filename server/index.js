var http = require('http');
var express = require('express');
var websockets = require('./ws');
var server = express();
server.use(express.static(__dirname + '/../html'));

http.createServer(server).listen(3000, function (){
  console.log('Servidor disponible en %d', this.address().port);
  websockets(this);

});  

 