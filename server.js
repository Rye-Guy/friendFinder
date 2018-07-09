var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var fs = require("fs");
var http = require("http")

var app = express();
var PORT = 4500;

app.use(express.static(path.join(__dirname, './app/public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extend: true}));
app.use(bodyParser.text());

require(path.join(__dirname, './app/routing/apiRoutes'))(app);

require(path.join(__dirname, './app/routing/htmlRoutes'))(app);


app.listen(PORT, function(){
    console.log("Listening on PORT " + PORT);
});