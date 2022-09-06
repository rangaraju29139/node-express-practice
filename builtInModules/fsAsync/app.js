const { readFile, writeFile } = require("fs");

readFile("./content/data.txt", "utf-8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(result);
});
