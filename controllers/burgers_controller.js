var db = require("../models");

var express = require("express");


// Routes
module.exports = function(app) {
    // GET route to redirect
    app.get('/', function(req, res) {
        res.redirect("/api/all");
    });

    // GET route to show all burgers
    app.get("/api/all", function(request, response) {
        db.burgers.findAll({}).then(function(dbResponse) {
            response.render("index", { burgers: dbResponse });
        });
    });

    // POST route for saving a new post
    app.post("/api/burgers/create", function(req, res) {
        console.log(req.body.burger_name);
        db.burgers.create({
            burger_name: req.body.burger_name
        }).then(function(dbPost) {
            res.redirect("/api/all");
        });
    });

    // PUT route for updating devoured value
    app.put("/api/:id", function(req, res) {
        db.burgers.update({ devoured: 1 }, {
            where: {
                id: req.body.id
            },
        }).then(function(dbPost) {
            res.redirect("/api/all");
            console.log("dbpost:" + dbPost);
        });
    });
};

