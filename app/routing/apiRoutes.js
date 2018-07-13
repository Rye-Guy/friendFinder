var path = require('path');
console.log("hello");
var friends = require('../data/friends.js');
console.log(friends.length);
module.exports = function(app){
    app.get('/api/friends', function(req, res){
        console.log(req);
        
        console.log(res.json(friends));
    });

    app.post('/api/friends', function(req,  res){
        var userInput = req.body;
        console.log(friends);
        var userResponses = userInput.scores;

        var matchName = '';
        var matchImage = '';
        var difference = 10000;
        
        for(i = 0; i < friends.length; i++){
            var diff = 0;
        
            for(x = 0; x < userResponses.length; x++){


                diff += Math.abs(friends[i].scores[x] - userResponses[x]);
                console.log(diff);
            }
            console.log(difference);

            if(diff < difference){

				totalDifference = diff;
                matchName = friends[i].name;
                matchImage = friends[i].photo;
            }
        }



        friends.push(userInput);

        res.json({status: 'OK', matchName: matchName, matchImage: matchImage});     
    });

}