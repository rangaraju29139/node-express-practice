const http = require("http");

const server = http.createServer((req, res) => {
  console.log("user hit the server");
  res.writeHead(200, { "content-type": "text/plain" });
  res.write(`<h1>Simple server</h1>`);
  res.end();
});

server.listen(5000);
