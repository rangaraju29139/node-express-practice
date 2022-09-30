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

app.post("/api/postman/people", (req, res) => {
  const { name } = req.body;
  console.log(name);
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: "Please provide the name!!" });
  }
  res.status(201).json({ success: true, person: [...people, name] });
});

app.post("/login", (req, res) => {
  console.log(req.body);
  if (req.body.name) {
    res.send(`Welcome ${req.body.name}`);
  } else {
    res.send("You have submitted a empty form ");
  }
});

app.put("/api/people/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const personName = people.find((person) => person.id === Number(id));
  console.log(personName);
  if (personName) {
    const newPeople = people.map((person) => {
      if (person.id === Number(id)) {
        person.name = name;
      }
      return person;
    });
    return res.status(200).json({ success: true, data: newPeople });
  } else {
    return res.json({
      success: false,
      msg: "could not find the person with given id",
    });
  }
});

app.delete("/api/people/:id", (req, res) => {
  const { id } = req.params;
  const personName = people.find((person) => person.id === Number(id));
  console.log(personName);
  if (personName) {
    const newPeople = people.map((person) => {
      if (person.id != Number(id)) {
        return person;
      }
    });
    return res.status(200).json({ success: true, data: newPeople });
  } else {
    return res.status(404).json({
      success: false,
      msg: "could not find the person with given id",
    });
  }
});

app.listen(5000, () => {
  console.log("server listening at port 5000");
});
