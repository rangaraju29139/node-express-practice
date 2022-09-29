const express = require("express");
const app = express();
const { products } = require("./data.js");

app.get("/", (req, res) => {
  res.send(`<h1>Home page</h1><a href='/api/products/1'>Products</a>`);
});
app.get("/api/products/:productId", (req, res) => {
  const { productId } = req.params;
  const singleProduct = products.find(
    (product) => product.id === Number(productId)
  );
  if (!singleProduct) {
    res.status(404).send("product not found");
  }
  res.json(singleProduct);
});

app.get("/api/v1/query", (req, res) => {
  console.log(req.query);
  const { search, limit } = req.query;
  var sortedProducts = [...products];
  if (search) {
    sortedProducts = sortedProducts.filter((product) => {
      return product.name.startsWith(search);
    });
  }
  if (limit) {
    sortedProducts = sortedProducts.slice(0, Number(limit));
  }
  if (sortedProducts.length < 1) {
    res.send("no products found");
  } else {
    res.json(sortedProducts);
  }

  //   res.send("hello world");
});

app.get("/api/products/:productId/reviews/:reviewId", (req, res) => {
  console.log(req.params);
  res.send("hello world");
});

app.all("*", (req, res) => {
  res.status(404).send(`page not found`);
});

app.listen(5000, () => {
  console.log("server listening at port 5000");
});
