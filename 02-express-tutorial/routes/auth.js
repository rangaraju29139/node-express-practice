const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  console.log(req.body);
  if (req.body.name) {
    res.send(`Welcome ${req.body.name}`);
  } else {
    res.send("You have submitted a empty form ");
  }
});

module.exports = router;
