const http = require("http");

const server = http.createServer((req, res) => {
  res.write("Welcome to my Home Page");
  res.end();
});

server.listen(5000);
// node app.js to execute
