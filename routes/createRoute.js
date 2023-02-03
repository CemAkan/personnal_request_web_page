var express = require("express");
var router = express.Router();
var userCreator = require("../public/javascripts/creating");

/* users creating */
router.get("/", function (req, res, next) {
  var Person = {};
  Person = req.query.person;

  let str = Person;
  str = str
    .replace(/:/g, '":"')
    .replace(/,/g, '","')
    .replace(/{/g, '{"')
    .replace(/}/g, '"}');

  let person = JSON.parse(str);

  userCreator(person.username, person.mail, person.phone, person.active);
});
module.exports = router;
