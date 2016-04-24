var exec = require("child_process").exec;

function start(response){
    console.log("Request handler 'start' was called.");
        
    /* Try to make a more time-consuming call to verify 
    upload() function will not be affected
    */
    //exec("find \"C:\goofy.txt\"", function(error, stdout, stderr) {
    //exec("ls -lah", function(error, stdout, stderr) {
    exec("dir /B /S /W", function(error, stdout, stderr) {
        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write(stdout);
        response.end();
    })
}

function upload(response) {
    console.log("Request handler 'upload' was called.");
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello Upload");
    response.end();
}

exports.start = start;
exports.upload = upload;