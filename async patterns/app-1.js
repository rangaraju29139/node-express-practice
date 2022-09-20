const { readFile } = require("fs");

readFile("./async patterns/content/first.txt", "utf8", (err, data) => {
  if (err) {
    console.log(err);
    return;
  } else {
    console.log(data);
  }
});
