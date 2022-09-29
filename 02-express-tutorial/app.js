const express = require("express");
const app = express();
const logger = require("./logger.js");
const authorize = require("./authorize.js");

// req => middleware => res
// middle ware to all the functions
// app.use(logger);

// middle ware for certain pattern

// app.use("/api", logger);
//this is applicable to all the request of /api and sub children

//order matters
app.use([authorize, logger]);

app.get("/", (req, res) => {
  res.send("home page");
});

// middle ware to all the functions below the app.use and the middle ware not applicable to /
// app.use(logger);

app.get("/about", (req, res) => {
  res.send("about page");
});

app.get("/api/products", (req, res) => {
  res.send("products");
});

app.listen(5000, () => {
  console.log("server listening at port 5000");
});
