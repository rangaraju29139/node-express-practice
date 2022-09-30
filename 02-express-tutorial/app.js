const express = require("express");
const app = express();
const people = require("./routes/people.js");
const login = require("./routes/auth.js");

app.use(express.static("./methods-public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/api/people", people);
app.use("/login", login);

app.listen(5000, () => {
  console.log("server listening at port 5000");
});
