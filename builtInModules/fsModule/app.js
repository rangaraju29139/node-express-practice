const { readFileSync, writeFileSync, read, write } = require("fs");

const first = readFileSync("./content/data.txt", "utf-8");
const second = readFileSync("./content/output.txt", "utf8");

writeFileSync(
  "./content/sync-output.txt",
  `the sync output is ${first}, ${second}`
);
