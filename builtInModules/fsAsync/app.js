const { readFile, writeFile } = require("fs");

readFile("./content/data.txt", "utf-8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  //   console.log(result);
  const first = result;
  readFile("./content/output.txt", "utf-8", (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = data;
    writeFile(
      "./content/AsyncResult.txt",

      `Here is the result: ${first}, ${second}`,
      (err, result) => {
        if ((err, result)) {
          console.log(err);
          return;
        }
        console.log(`write to the file completed`);
      }
    );
  });
});
