const express = require("express");
const app = express();
const logger = require("./logger.js");

// req => middleware => res

app.get("/", logger, (req, res) => {
  res.send("home page");
});

app.get("/about", logger, (req, res) => {
  res.send("about page");
});

app.listen(5000, () => {
  console.log("server listening at port 5000");
});
