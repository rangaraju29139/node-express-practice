const http = require("http");

const server = http.createServer();

server.on("request", (req, res) => {
  res.end("Welcome");
});

server.listen(5000, () => {
  console.log("server listening on port 5000");
});
