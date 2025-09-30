const path = require("path")

console.log("path :", path);

console.log("-----", __dirname, "dir Name");
console.log("-----", __filename, "file Name");

const filePath = path.join("folder", "student", "data.txt")
console.log("file Path: ", filePath);


const parseData = path.parse(filePath);
const resolvedPath = path.resolve(filePath);
const extname = path.extname(filePath);
const basename = path.basename(filePath);
const dirname = path.dirname(filePath);

console.log({ parseData, resolvedPath, extname, basename, dirname });
