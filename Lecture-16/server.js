const express = require("express");
const mongoose = require("mongoose");

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// POST route
app.post("/blogs", (req, res) => {
    let { title, body } = req.body;
    console.log("Received blog:", title, body);

    res.send({
        message: "Blog received",
        data: { title, body }
    });
});

// Server start
app.listen(3000, () => {
    console.log("Server started on port 3000");
});

