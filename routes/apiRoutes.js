// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on friend-data, waitinglist, etc.
// ===============================================================================

var friendData = require("../data/friendData");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the friend)
  // ---------------------------------------------------------------------------

  app.get("/api/friends", function(req, res) {
    res.json(friendData);
  });

  // app.get("/api/waitlist", function(req, res) {
  //   res.json(waitListData);
  // });

  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a reservation request... this data is then sent to the server...
  // Then the server saves the data to the friendData array)
  // ---------------------------------------------------------------------------

  app.post("/api/friends", function(req, res) {
    var newFriendData;
    console.log(newFriendData);


    // Note the code here. Our "server" will respond to requests and let users know if they have a friend or not.
    // It will do this by sending out the value "true" have a friend
    // req.body is available since we're using the body parsing middleware
    // if (friendData.length < 5) {
      newFriendData.push(req.body);
      // res.json(true);
    // }
    // else {
      // waitListData.push(req.body);
      // res.json(false);
    // }

  });

  
};
