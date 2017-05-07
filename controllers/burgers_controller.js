var db = require("../models");

var express = require("express");


// Routes
module.exports = function(app) {
    // GET route to redirect
    /*app.get('/', function(req, res) {
        res.redirect("/api/all");
    });*/

    // GET route to show all burgers
    app.get("/", function(request, response) {
        db.burgers.findAll({}).then(function(dbResponse) {
            response.render("index", { burgers: dbResponse });
        });
    });

    // POST route for saving a new post
    app.post("/burgers/create", function(request, response) {
        //console.log("Request: "+request.body);
        db.burgers.create({
            burger_name: request.body.burger_name,
            devoured: request.body.devoured
        }).then(function(dbPost) {
            response.redirect("/");
        });
    });

    // PUT route for updating devoured value
    app.put("/burgers/update/:id", function(req, res) {
        db.burgers.update({ devoured: 1 }, {
            where: {
                id: req.params.id
            },
        }).then(function(dbPost) {
            res.redirect("/");
        });
    });
};

