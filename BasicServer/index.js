var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers.js")

//This is a javascript object
//In js, objects are collection of key-value pairs, like dictionaries;
//the key is a string, the value can be string, number or a function!
//So, handle is a collection of request handlers
var handle = {};
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;

server.start(router.route, handle);