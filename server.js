var express = require("express");
require('dotenv').config();

var app = express();

var PORT = process.env.PORT || 8080;



// Serve static content for the app from the "public" directory in the application directory.
var db = require("./models");

// Parse application body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
require("./routes/post-route.js")(app);
require("./routes/seller-route.js")(app);

// app.use(routes);
// app.use(routes2);

// Start our server so that it can begin listening to client requests.
// db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
// }).catch(err => console.log(err));