import readline from "readline";
import fs from "fs";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const fileCreator = () => {
    rl.question("Enter the file name: ", handleInput)
}

const handleInput = (value) => {
    rl.question("Enter data to add the file: ", (content) => {
        fs.writeFile(`${value}.txt`, content, (err) => {
            if (err) {
                console.log("Error: ", err);
            }
            else {
                console.log(`File ${value}.txt created successfully!!`);
            }
        })
        rl.close()
    })
}

fileCreator();