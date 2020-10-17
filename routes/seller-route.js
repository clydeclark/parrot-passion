var db = require("../models");

module.exports = function(app) {
  app.get("/api/sellers", function(req, res) {
    // 1. Add a join to include all of each Seller's Posts
    db.Seller.findAll({include: [db.Post]}).then(function(dbSeller) {
      res.json(dbSeller);
      
    });
  });

  app.get("/api/sellers/:id", function(req, res) {
    // 2; Add a join to include all of the Seller's Posts here
    db.Seller.findOne({
      where: {
        id: req.params.id,
        include: [db.Post]
      }
    }).then(function(dbSeller) {
      res.json(dbSeller);
    });
  });

  app.post("/api/sellers", function(req, res) {
    db.Seller.create(req.body).then(function(dbSeller) {
      res.json(dbSeller);
    });
  });

  app.delete("/api/sellers/:id", function(req, res) {
    db.Seller.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbSeller) {
      res.json(dbSeller);
    });
  });

};