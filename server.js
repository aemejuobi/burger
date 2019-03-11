// Set up Express
var express = require("express");
var exphb = require("express-handlebars");
var app = express();

var port = process.env.PORT || 8080;

// var path = require("path");
var orm = require("./config/orm");

app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.engine("handlebars", exphb({defaultLayout: "main"}));
app.set("view-engine", "handlebars");

var routes = require("./controllers/burgers_controller");

app.listen(port, function(){
    console.log(`Listening on port ${port}`);
});

