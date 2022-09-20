const eventEmitter = require("events");

const customEvent = new eventEmitter();

customEvent.on("response", (name, id) => {
  console.log(`data received : ${name}, ${id}`);
});
customEvent.on("response", () => {
  console.log("some other logic");
});

customEvent.emit("response", "name", "id");
