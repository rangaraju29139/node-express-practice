const { rejects } = require("assert");
const { readFile, writeFile } = require("fs").promises;
const { resolve } = require("path");
const util = require("util");
// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

const getText = (path) => {
  return new Promise((resolve, reject) => {
    readFile(path, "utf8", (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

// getText("./async patterns/content/first.txt")
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err));

const start = async () => {
  try {
    const first = await readFile("./async patterns/content/first.txt", "utf-8");
    await writeFile(
      "./async patterns/content/new-file.txt",
      `this is the Awesome content : ${first}`
    );

    console.log(first);
  } catch (error) {
    console.log(error);
  }
};
start();
