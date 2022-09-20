const { rejects } = require("assert");
const { readFile } = require("fs");
const { resolve } = require("path");

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
    const first = await getText("./async patterns/content/first.txt");
    console.log(first);
  } catch (error) {
    console.log(error);
  }
};
start();
