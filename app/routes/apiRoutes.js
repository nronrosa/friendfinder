// LOAD DATA
var friends = require("../data/friends");

// ROUTING
module.exports = function (app) {
  // API GET Requests
  app.get("/api/friends", function (req, res) {
    res.json(friends);
  });

  // API POST Requests
  app.post("/api/friends", function (req, res) {
    // create object for the best match
    var bestMatch = {
      name: "",
      photo: "",
      pointDiff: Infinity
    }
    // Users responses
    var userData = req.body;
    var userAnswers = userData.answers;
    var totalDiff = 0;
    // Loop through each friend in friends array
    for (var i = 0; i < friends.length; i++) {
      // Loop through each answer array of each friend in friend's array 
      for (var j = 0; j < friends[i].answers[j]; j++) {
        // calc the diff of the user answsers minus the current fiend's answer (first loop)
        totalDiff = Math.abs(parseInt(userAnswers[j]) - parseInt(friends[i].answers[j]));
      }
      // Checks lowest diff
      if (totalDiff <= bestMatch.pointDiff) {
        bestMatch.name = friends[i].name;
        bestMatch.photo = friends[i].photo;
        bestMatch.pointDiff = totalDiff;
      }
    };

    friends.push(userData);
    res.json(bestMatch);
  });

};