const http = require("http");

// const server = http.createServer((req, res) => {
//   console.log(req);
//   res.write("Welcome to my Home Page");
//   res.end();
// });

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("this is the home page");
  }
  if (req.url === "/about") {
    res.end("this is the about page");
  }
  res.end(`
  <h1>Oops!! we are not able to find the page you are looking for....</h1>
  `);
});

server.listen(5000);
// node app.js to execute
