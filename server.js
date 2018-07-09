var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var fs = require("fs");
var http = require("http")

var app = express();
var PORT = 4500;

var server = http.createServer(handleRequest);

function handleRequest(req, res){
        var path = req.url;
        console.log(path);
    if(path.endsWith('.css')){
    
        var name = path.getFileName();
    
        fs.readFile(__dirname + path, function(err, data){
            res.writeHead(200, {"Content-Type": "text/css"});
            res.end(data);
        });
    }else if(path.endsWith('.js')){

        fs.readFile(__dirname + path, function(err, data) {
            
        res.writeHead(200, { "Content-Type": "text/javascript" });
        res.end(data);
    });
    }else{
        fs.readFile(__dirname + path, function(err, data) {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(data);
          });		
    }
}

// app.get("/", function(req, res){
//     console.log(res);
//     res.sendFile(path.join(__dirname, "public/home.html"));
// });

// app.get("/survey", function(req, res){
//     console.log(res);
//     res.sendFile(path.join(__dirname, "public/survey.html"))
// })

server.listen(PORT, function(){
    console.log("Listening on PORT " + PORT);
});