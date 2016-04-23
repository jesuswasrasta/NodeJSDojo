//Modules to include
var http = require("http");

//We are passing a function as an argument of createServer function
http.createServer(
    //Anonymous function
    function(request, response) 
    {
          response.writeHead(200, {"Content-Type": "text/plain"});
          response.write("Hello World");
          response.end();
    }
).listen(8888);