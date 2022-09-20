const { createReadStream } = require("fs");
const path = require("path");

const filePath = path.resolve(__dirname, "large-file.txt");

// const stream = createReadStream(filePath);
const stream = createReadStream(filePath, { encoding: "utf8" });

stream.on("data", (result) => {
  console.log(result);
});
