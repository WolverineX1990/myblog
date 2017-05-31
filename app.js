var http = require('http');
var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1'

var server = http.createServer(function(req, res){
    if(req.url!=="/favicon.ico"){
        res.writeHead(200,{"Content-Type":"text/plain","Access-Control-Allow-Origin":"http://localhost"});
        res.write("你好啊!");
    }
    res.end();
});

server.listen(server_port, server_ip_address, function(){
  console.log("Listening on " + server_ip_address + ", server_port " + server_port)
});