const http = require("http");

const server = http.createServer((req, res) => {
  console.log("user hit the server");
  console.log(req.method);
  console.log(req.url);
  res.writeHead(200, { "content-type": "text/html" });
  res.write(`<h1>Simple server</h1>`);
  res.end();
});

server.listen(5000);
