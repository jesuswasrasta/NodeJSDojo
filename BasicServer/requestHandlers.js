var exec = require("child_process").exec;

function start(){
    console.log("Request handler 'start' was called.");
    
    var content = "empty";
    
    //Non-blocking operation: list files in directory
    //Linux version
    //exec("ls -lah", function(error, stdout, stderr) {
    //Windows version
    exec("dir /B /S /W", function(error, stdout, stderr) {
        content = stdout;
    })
    
    return content;
}

function upload() {
    console.log("Request handler 'upload' was called.");
    return "Hello Upload";
}

exports.start = start;
exports.upload = upload;