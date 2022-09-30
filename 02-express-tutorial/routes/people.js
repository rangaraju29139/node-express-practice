const express = require("express");
const router = express.Router();
let { people } = require("../data.js");

const {
  getPeople,
  createName,
  updateName,
  deleteName,
  createNamePostMan,
} = require("../controllers/people.js");

// router.get("/", getPeople);
// router.post("/", createName);
// router.post("/postman", createNamePostMan);
// router.put("/:id", updateName);
// router.delete("/:id", deleteName);

router.route("/").get(getPeople).post(createName);
router.route("/:id").put(updateName).delete(deleteName);
router.route("/postman").post(createNamePostMan);

module.exports = router;
