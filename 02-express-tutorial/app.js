const express = require("express");
const app = express();
const { products } = require("./data.js");

app.get("/", (req, res) => {
  res.send(`<h1>Home page</h1><a href='/api/products'>Products</a>`);
});
app.get("/api/products", (req, res) => {
  const newProducts = products.map((product) => {
    const { id, name, desc } = product;
    return { id, name, desc };
  });
  res.json(newProducts);
});

app.all("*", (req, res) => {
  res.status(404).send(`page not found`);
});

app.listen(5000, () => {
  console.log("server listening at port 5000");
});
