# events in node js

## simple event emitter function

```javascript
const eventEmitter = require("events");

const customEvent = new eventEmitter();

customEvent.on("response", () => {
  console.log("data received");
});

customEvent.emit("response");
```

### we can pass on multiple event on the same emit

```javascript
const eventEmitter = require("events");

const customEvent = new eventEmitter();

customEvent.on("response", () => {
  console.log("data received");
});
customEvent.on("response", () => {
  console.log("some other logic");
});

customEvent.emit("response");
```

### events with parameters

```javascript
const eventEmitter = require("events");

const customEvent = new eventEmitter();

customEvent.on("response", (name, id) => {
  console.log(`data received : ${name}, ${id}`);
});
customEvent.on("response", () => {
  console.log("some other logic");
});

customEvent.emit("response", "name", "id");
```

### event on http server

```javascript
const http = require("http");

const server = http.createServer();

server.on("request", (req, res) => {
  res.end("Welcome");
});

server.listen(5000, () => {
  console.log("server listening on port 5000");
});
```
