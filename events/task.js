const fs = require('fs');
const path = require("path");

const EventEmitter = require("events");

const emitter = new EventEmitter();

const fileName = 'counts.json';
const filePath = path.join(__dirname, fileName)

let eventCounts = fs.existsSync(filePath)
    ? JSON.parse(fs.readFileSync(filePath, "utf-8"))
    : {
        "user-login": 0,
        "user-logout": 0,
        "user-purchase": 0,
        "profile-update": 0
    };

emitter.on("user-login", (userName) => {
    eventCounts["user-login"]++;
    console.log(`${userName} logged in`);
})

emitter.on("user-purchase", (userName, item) => {
    eventCounts["user-purchase"]++;
    console.log(`${userName} purchase ${item}`);
})

emitter.on("user-update", (userName, field) => {
    eventCounts["profile-update"]++;
    console.log(`${userName} you are updates ${field}`);
})

emitter.on("user-logout", (userName) => {
    eventCounts["user-logout"]++;
    console.log(`${userName} logged out!!`);
})

emitter.on("summary", () => {
    console.log(eventCounts);
    fs.writeFileSync(filePath, JSON.stringify(eventCounts, null, 2));
})

emitter.emit("user-login", "mansi");
emitter.emit("user-purchase", "mansi", "Phone");
emitter.emit("user-update", "mansi", "email");
emitter.emit("user-logout", "mansi");

emitter.emit("summary");