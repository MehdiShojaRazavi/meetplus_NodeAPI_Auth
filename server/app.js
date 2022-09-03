const express = require("express");
const routes = require("./routes");
const path = require("path");
const createError = require("http-errors");
const bodyParser = require("body-parser");

module.exports = (config) => {
  const app = express();
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(express.json());

  app.use("/", routes);

  // catch 404 and forward to error handler
  app.use((req, res, next) => {
    next(createError(404));
  });

  if (app.get("env") === "development") {
    app.locals.pretty = true;
  }

  // error handler
  // eslint-disable-next-line no-unused-vars
  app.use((err, req, res, next) => {
    res.locals.message = err.message;
    const status = err.status || 500; // If no status is provided, let's assume it's a 500
    // res.locals.status = status;
    // res.locals.error = req.app.get("env") === "development" ? err : {};
    res.status(status);
    res.send("error ," + status);
  });

  return app;
};
