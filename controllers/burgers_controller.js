var express = require("express");
var router = express.Router;
var burger = require("../models/burger.js");

// GET route
router.get("/", function(req, res){
    burger.selectAll(function(data){
        console.log(data);
    });
});

// POST route
router.post("/api/burgers", function(req, res){
    burger.insertOne(0, function(data){
        console.log(data);
    })
});

// Update route
router.put("/api/burgers/:id", function(res, req){
    var id = req.params.id;
    burger.updateOne()

});


module.exports = router;