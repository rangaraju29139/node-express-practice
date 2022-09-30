const express = require("express");
const app = express();
let { people } = require("./data.js");

app.use(express.static("./methods-public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/api/people", (req, res) => {
  res.json({ success: true, data: people });
});

app.post("/api/people", (req, res) => {
  console.log(req.body);
  const name = req.body.name;
  if (!name) {
    res.status(400).json({ success: false, msg: "Please provide the name!!" });
  } else {
    res.status(201).json({ success: true, person: name });
  }
});

app.post("/login", (req, res) => {
  console.log(req.body);
  if (req.body.name) {
    res.send(`Welcome ${req.body.name}`);
  } else {
    res.send("You have submitted a empty form ");
  }
});

app.listen(5000, () => {
  console.log("server listening at port 5000");
});
