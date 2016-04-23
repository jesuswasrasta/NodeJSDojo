var http = require("http");
var url = require("url");

var onRequest = function(request, response) {
    var pathname = url.parse(request.url).pathname;
    console.log("Request for " + pathname + " received.");
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello World");
    response.end();
}
var start = function start() {
    onRequest;
    http.createServer(onRequest).listen(8888);
    console.log("Server has started.");
}

exports.start = start;