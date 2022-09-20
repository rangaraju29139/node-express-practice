const eventEmitter = require("events");

const customEvent = new eventEmitter();

customEvent.on("response", () => {
  console.log("data received");
});
customEvent.on("response", () => {
  console.log("some other logic");
});

customEvent.emit("response");
