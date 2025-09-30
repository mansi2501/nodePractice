const fs = require("fs");
const { writeFile } = require("fs/promises");
const path = require("path");

const fileName = "text.txt";
const filepath = path.join(__dirname, fileName);

// const file = __dirname

// fs.promises
//     .readdir(file)
//     .then((data) => console.log(data))
//     .catch((err) => console.error(err))

// fs.promises
//     .writeFile(filepath, "This is new promise file text", "utf-8")
//     .then(console.log("Data added to file"))
//     .catch((err) => console.error(err))

// fs.promises
//     .readFile(filepath, "utf-8")
//     .then((data) => console.log(data))
//     .catch((err) => console.error(err))

fs.promises
    .appendFile(filepath, "\nThis is updated promise file text", "utf-8")
    .then(console.log("Data updated added to file"))
    .catch((err) => console.error(err))
