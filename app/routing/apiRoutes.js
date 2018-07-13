var path = require('path');
console.log("hello");
var friends = require('../data/friends.js');

module.exports = function(app){
    app.get('/api/friends', function(req, res){
        console.log(req);
        
        console.log(res.json(friends));
    });

    app.post('/api/friends', function(req,  res){
        var userInput = req.body;
        
        var userResponses = userInput.scores;

        var matchName = '';
        var matchImage = '';
        var difference = 10000;
        
        for(i = 0; i < friends.length; i++){
            var diff = 0;
        
            for(x = 0; x < userResponses.length; x++){
                //Math.abs prevents makes values always compute BIGNUM - SMALLNUM preventing negative numbers. This makes sure we get the number we need for the friendship test.

                diff += Math.abs(friends[i].scores[x] - userResponses[x]);
            }

            if(diff < difference){
                console.log('Closest match found = ' + diff);
				console.log('Friend name = ' + friends[i].name);
				console.log('Friend image = ' + friends[i].photo);

				totalDifference = diff;
				matchName = friends[i].name;
				matchImage = friends[i].photo;
            }
        }

        friends.push(userInput);


    });

}