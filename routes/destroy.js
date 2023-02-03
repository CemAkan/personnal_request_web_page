var express = require("express");
var router = express.Router();
var userDelete = require("../public/javascripts/destroy");

router.get("/", (req, res, next) => {
  var id = req.query.id;
  userDelete(id);
});

module.exports = router;
