const EventEmitter = require("events");

const emitter = new EventEmitter();

emitter.on("greet", () => {
    console.log("Good Morning!!!!!");
})

emitter.emit("greet");