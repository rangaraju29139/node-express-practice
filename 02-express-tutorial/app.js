const express = require("express");
const app = express();
app.get("/", (req, res) => {
  res.json([{ name: "rangaraju" }, { name: "penmetsa" }]);
});

app.all("*", (req, res) => {
  res.status(404).send(`page not found`);
});

app.listen(5000, () => {
  console.log("server listening at port 5000");
});
