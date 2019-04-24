// DEPENDENCIES
var express = require("express");
var path = require("path");

// EXPRESS CONFIGURATION
// This sets up the basic properties for our express server
var app = express();
var path = require("path");

// Sets an initial port. 
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// To handle path of css files
app.use(express.static(path.join(__dirname, "app/public/")));

// ROUTER
require("./app/routes/apiRoutes")(app);
require("./app/routes/htmlRoutes")(app);

// LISTENER
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
