const http = require("http");

const server = http.createServer((req, res) => {
  res.write(`this is the home page`);
  res.end();
});
server.listen(5000, () => {
  console.log(`server is listening at port  5000....`);
});
