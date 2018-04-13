// Dependencies
var express = require( "express" );
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = 3000;

// Data
var allTables = [
    {
        name: "Caroline",
        phone: 92384,
        email: "something@gmail.com",
        uniqueID: "booger"
    }
];

// Guests

    // Reservations
    var reservations = [];
    // Waitlist
    var waitlist = [];

// Routes

    // Basic route that sends the user first to the AJAX Page
        // GETS
        app.get("/", function(req, res) {
            // res.send("Welcome to the Star Wars Page!")
            res.sendFile(path.join(__dirname, "index.html"));
        });

        // Displays all tables
        app.get("/tables", function (req, res) {
            res.sendFile(path.join(__dirname, "tables.html"))
        });
        // Displays reservation form
        app.get("/reserve", function (req, res) {
            res.sendFile(path.join(__dirname, "makeRes.html"))
        });

        // Deliver JSON to weird useless links at the bottom
        app.get("/api/tables", function (req, res) {
            return res.json( allTables );
        });

        app.get("/api/waitlist", function (req, res) {
            return res.json( waitlist );
        });

        // POST
        app.post("/api/tables", function(req, res) {
            // req.body hosts is equal to the JSON post sent from the user
            // This works because of our body-parser middleware
            var newReservation = req.body;
          
            console.log(newReservation);
          
            // We then add the json the user sent to the character array
            allTables.push(newReservation);
          
            // We then display the JSON to the users
            res.json(newReservation);
          });



// Listener
app.listen(PORT, function(){
    console.log("App listening on PORT " + PORT);
});