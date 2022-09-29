const express = require("express");
const app = express();
let { people } = require("./data.js");

app.use(express.static("./methods-public"));

app.get("/api/people", (req, res) => {
  res.json({ success: true, data: people });
});

app.listen(5000, () => {
  console.log("server listening at port 5000");
});
