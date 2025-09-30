const fs = require("fs");
const path = require("path");

const fileName = "asynctext.txt";
const filePath = path.join(__dirname, fileName);

// const file = __dirname

// const readDirectory = async () => {
//     try {
//         const res = await fs.promises.readdir(file)
//         console.log("result:", res);
//     } catch (error) {
//         console.log(error);
//     }
// }

// readDirectory();

// const writeFile = async () => {
//     try {
//         await fs.promises.writeFile(filePath, "This is async await test file data", "utf-8")
//         console.log("file data added");
//     } catch (error) {
//         console.log(error);

//     }
// }

// writeFile()

// const readFile = async () => {
//     try {
//         const data = await fs.promises.readFile(filePath, "utf-8")
//         console.log(data);
//     } catch (error) {
//         console.log(error);
//     }
// }

// readFile()

const appendFile = async () => {
    try {
        fs.promises.appendFile(filePath, "\n New line added to file", "utf-8")
        console.log("file updated");

    } catch (error) {
        console.log(error);

    }
}

appendFile();