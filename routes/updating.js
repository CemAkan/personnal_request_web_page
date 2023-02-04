var express = require("express");
var router = express.Router();
var userUpdate = require("../public/javascripts/updating");

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
  console.log(
    "------------>" + person.id,
    person.username,
    person.email,
    person.phone,
    person.active + "<--------------"
  );

  userUpdate(
    person.id,
    person.username,
    person.email,
    person.phone,
    person.active
  );
});
module.exports = router;
