const fs = require("fs")
const path = require("path")

const fileName = "test.txt";
const filePath = path.join(__dirname, fileName);

// fs.writeFile(filePath, "This is test file data", "utf-8", (err) => {
//     if (err) console.error(err);
//     else console.log("File data saved");
// });

// fs.readFile(filePath, "utf-8", (err, data) => {
//     if (err) console.error(err);
//     else console.log(data);
// });

// fs.appendFile(filePath, "\nThis is an updated data", "utf-8", (err) => {
//     if (err) console.error(err);
//     else console.log("File data updated");
// });

fs.unlink(filePath, (err) => {
    if (err) console.error(err);
    else console.log("File deleted");
});

