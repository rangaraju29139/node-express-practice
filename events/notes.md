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
