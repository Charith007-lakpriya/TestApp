const express = require("express");
const app = express();

let username = "";

// This allows the server to read form data
app.use(express.urlencoded({ extended: true }));

// FIRST PAGE
app.get("/", (req, res) => {
    res.send(`
        <h1>Welcome</h1>
        <p>Please enter your name</p>

        <form method="POST" action="/greet">
            <input type="text" name="name" placeholder="Enter your name">
            <button type="submit">Get Greeting</button>
        </form>
    `);
});

// POST REQUEST
app.post("/greet", (req, res) => {
    username = req.body.name;
    res.redirect("/hello");
});

// SECOND PAGE
app.get("/hello", (req, res) => {
    res.send(`
        <h1>Hello, ${username}!</h1>
        <a href="/">Go Back</a>
    `);
});

// START SERVER
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});