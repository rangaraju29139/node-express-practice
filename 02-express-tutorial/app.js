const express = require("express");
const app = express();
const { products } = require("./data.js");

app.get("/", (req, res) => {
  res.json(products);
});

app.all("*", (req, res) => {
  res.status(404).send(`page not found`);
});

app.listen(5000, () => {
  console.log("server listening at port 5000");
});
