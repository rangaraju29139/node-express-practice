const { people } = require("../data.js");

const getPeople = (req, res) => {
  res.json({ success: true, data: people });
};

const createName = (req, res) => {
  console.log(req.body);
  const name = req.body.name;
  if (!name) {
    res.status(400).json({ success: false, msg: "Please provide the name!!" });
  } else {
    res.status(201).json({ success: true, person: name });
  }
};

const updateName = (req, res) => {
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
};

const deleteName = (req, res) => {
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
};
const createNamePostMan = (req, res) => {
  const { name } = req.body;
  console.log(name);
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: "Please provide the name!!" });
  }
  res.status(201).json({ success: true, person: [...people, name] });
};

module.exports = {
  getPeople,
  createName,
  updateName,
  deleteName,
  createNamePostMan,
};
