var path = require('path');
console.log("hello");
var friends = require('../data/friends.js');

module.exports = function(app){
    app.get('/api/friends', function(req, res){
        console.log(req);
        
        console.log(res.json(friends));
    });
}