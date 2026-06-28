const express = require("express");
const path = require("path");

const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.post("/register", (req, res) => {
    const { name, email, department, event } = req.body;

    console.log("Registration Details");
    console.log(name, email, department, event);

    res.send(`
        <h2>Registration Successful</h2>
        <p>Thank you ${name} for registering.</p>
        <a href="/">Go Back</a>
    `);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});