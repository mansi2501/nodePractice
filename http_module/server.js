const http = require("http");

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.write("Welcome to my server ..");
        res.end();
    }
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`listening on PORT ${PORT}`);

})