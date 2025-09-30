import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.send("<h1>Welcome!!</h1><h2>hello world</h2>");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is runing at Port: ${PORT}`);
})