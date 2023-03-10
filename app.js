var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var addRouter = require("./routes/add");
var createRouter = require("./routes/createRoute");
var deleteRouter = require("./routes/delete");
var destroyRouter = require("./routes/destroy.js");
var listRouter = require("./routes/list");
var listOneRouter = require("./routes/listone");
var updateRouter = require("./routes/update");
var updatingRouter = require("./routes/updating");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/create", createRouter);
app.use("/add", addRouter);
app.use("/delete", deleteRouter);
app.use("/destroy", destroyRouter);
app.use("/list", listRouter);
app.use("/listone", listOneRouter);
app.use("/update", updateRouter);
app.use("/updating", updatingRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
