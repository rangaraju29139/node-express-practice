const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req);
  res.write("Welcome to my Home Page");
  res.end();
});

server.listen(5000);
// node app.js to execute
