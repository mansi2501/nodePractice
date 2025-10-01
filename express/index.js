import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded())

app.get("/", (req, res) => {
    res.send("<h1>Welcome!!</h1><h2>hello world</h2>");
});

app.post("/contact", (req, res) => {
    console.log(req.body);
    res.redirect("/")
})

// app.get("/contact", (req, res) => {
//     console.log(req.query);
//     //res.redirect("/");
//     //res.send("ok");
// })

app.use((req, res) => { return res.status(404).send("Page not found"); })

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is runing at Port: ${PORT}`);
})