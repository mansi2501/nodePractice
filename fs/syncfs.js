const fs = require("fs");
const path = require("path");

const fileName = "test.txt";
const filePath = path.join(__dirname, fileName);

// write data into file, if file is already there then it will update the data otherwise new file is created
// const writeFile = fs.writeFileSync(filePath, "This is test file Data", "utf-8");
// console.log(writeFile);

//Read data from file
// const readFile = fs.readFileSync(filePath, "utf-8")
// console.log(readFile);


//append data to file
// const appendFile = fs.appendFileSync(filePath, "\nThis is updated file Data", "utf-8");
// console.log(appendFile);


//delete file from path
//const deleteFile = fs.unlinkSync(filePath)

//rename exsisting file
const newUpdatedFileName = "updatedTest.txt"
const newUpdatedPath = path.join(__dirname, newUpdatedFileName)
const renameFile = fs.renameSync(filePath, newUpdatedPath)
console.log(renameFile);
