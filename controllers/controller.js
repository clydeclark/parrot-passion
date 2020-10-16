var express = require("express");

var router = express.Router();

// Import the model (parrot.js) to use its database functions.
var parrot = require("../models/parrot.js");

// Create routes
router.get("/", function (req, res) {
    parrot.all(function (data) {
        let hbsObject = {

        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

// Export routes for server.js to use.
module.exports = router;