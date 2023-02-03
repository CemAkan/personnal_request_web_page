const { error } = require("console");
var express = require("express");
var router = express.Router();
const fs = require("fs");

/* GET home page. */
router.get("/", function (req, res, next) {
  fs.readFile(
    "/home/cem/Documents/codes/resignation_webpage/views/create.html",
    function (error, data) {
      res.setHeader("Content-Type", "text/html");
      if (error) {
        res.writeHead(404);
        res.write("Error occured");
      } else {
        res.write(data);
      }
      res.end();
    }
  );
});

module.exports = router;
