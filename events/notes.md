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
