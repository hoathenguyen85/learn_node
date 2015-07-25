var net = require('net');
var strftime = require('strftime');

var server = net.createServer(function(socket){
  socket.end(strftime('%Y-%m-%d %k:%M%n'));
});

server.listen(process.argv[2]);