const { writeFileSync } = require("fs");
const path = require("path");

const filePath = path.resolve(__dirname, "large-file.txt");

for (let i = 1; i <= 10000; i++) {
  writeFileSync(filePath, `Hello world ${i} \n`, { flag: "a" });
}
