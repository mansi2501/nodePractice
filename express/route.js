import express from "express";

const app = express();

app.get("/profile/:userName", (req, res) => {
    console.log(req.params);
    res.send(`<h1>Welcome ${req.params.userName} to our profile page</h1>`);
});

app.get("/profile/:userName/article/:slug", (req, res) => {
    console.log(req.params);
    const formatedSlug = req.params.slug.replace(/-g/, "");
    res.send(`<h1>Article ${req.params.userName} by ${formatedSlug}</h1>`);
});

app.get("/product", (req, res) => {
    console.log(req.query);
    res.send(`<h1>User search for Product ${req.query.search}</h1>`);
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is runing at Port: ${PORT}`);
})