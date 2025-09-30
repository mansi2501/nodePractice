import https from "https";

const getJoke = () => {

    const url = `https://official-joke-api.appspot.com/random_joke`;
    https.get(url, (res) => {
        let data = "";
        res.on('data', (chunk) => { data += chunk })
        res.on('end', () => {
            const joke = JSON.parse(data)
            console.log("Here is a random joke: ");
            console.log(`${joke.setup}`);
            console.log(`${joke.punchline}`);
        })
    })
}

getJoke();