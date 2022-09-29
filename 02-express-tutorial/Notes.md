# Notes

## hosing differen pages with node https server

```javascript
const http = require("http");
const { readFileSync, read } = require("fs");

const homePage = readFileSync("./navbar-app/index.html");
const styles = readFileSync("./navbar-app/styles.css");
const homeImg = readFileSync("./navbar-app/logo.svg");
const homeLogic = readFileSync("./navbar-app/browser-app.js");

const server = http.createServer((req, res) => {
  console.log("user hit the server");
  const url = req.url;
  if (url === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(homePage);
    res.end();
  } else if (url === "/about") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(`<h1>About page</h1>`);
    res.end();
  } else if (url === "/styles.css") {
    res.writeHead(200, { "content-type": "text/css" });
    res.write(styles);
    res.end();
  } else if (url === "/logo.svg") {
    res.writeHead(200, { "content-type": "text/svg+xml" });
    res.write(homeImg);
    res.end();
  } else if (url === "/browser-app.js") {
    res.writeHead(200, { "content-type": "text/javascript" });
    res.write(homeLogic);
    res.end();
  } else {
    res.writeHead(404, { "content-type": "text/html" });
    res.write(`<h1>page not found</h1>`);
    res.end();
  }
});

server.listen(5000);
```

# using express

### importing express

```javascript
const express = require("express");
```

### initializing the app

```javascript
const app = express();
```

### handling the different requests

```javascript
app.get("/", (req, res) => {
  res.send(`<h1>Home page</h1>`);
});

app.get("/about", (req, res) => {
  res.send(`<h1>About Page</h1>`);
});

app.all("*", (req, res) => {
  res.status(404).send(`<h1>Page not found</h1>`);
});
```

### server listening

```javascript
app.listen(5000, () => {
  console.log("server is listening at port 5000");
});
```

### api with express

```javascript
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
    res.status(200).json({ success: true, data: [] });
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
```
