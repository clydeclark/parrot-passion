var db = require("../models");
const homeController = require("./upload-route");
const uploadController = require("./upload-file");
const upload = require("../middleware/upload");

module.exports = function(app) {


  app.get("/api/posts", function(req, res) {
    var query = {};
    if (req.query.seller_id) {
      query.SellerId = req.query.seller_id;
    }
  
    db.Post.findAll({
      where: query,
      // include: [db.Seller]
    }).then(function(dbPost) {
      res.json(dbPost);
    });
  });

  // access upload page
  app.get("/api/upload", homeController.getHome);

  app.get("/api/posts/:id", function(req, res) {

    db.Post.findOne({
      where: {
        id: req.params.id,
        // include: [db.Seller]
      }
    }).then(function(dbPost) {
      console.log(dbPost);
      res.json(dbPost);
    });
  });


  app.post("/api/posts", function(req, res) {
    db.Post.create(req.body).then(function(dbPost) {
      res.json(dbPost);
    });
  });

  // post new parrot
  app.post("/api/upload/file", upload.single("file"), uploadController.uploadFiles);


  app.delete("/api/posts/:id", function(req, res) {
    db.Post.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbPost) {
      res.json(dbPost);
    });
  });


  app.put("/api/posts", function(req, res) {
    db.Post.update(
      req.body,
      {
        where: {
          id: req.body.id
        }
      }).then(function(dbPost) {
      res.json(dbPost);
    });
  });
};


