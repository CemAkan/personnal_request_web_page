var express = require("express");
var router = express.Router();
const UserFinder = require("../public/javascripts/listOne");

router.get("/", (req, res, next) => {
  var name = req.query.name;
  UserFinder(name);
});

module.exports = router;
