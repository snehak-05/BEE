const express = require("express");
const app = express();
const mongoose = require("mongoose");
const User = require("./model/users");
app.use(express.json());
app.use(express.urlencoded({ extended : true }))
app.use(express.static(__dirname + "/public"))

app.get("/health", (req, res) => {
    res.json({
        status: "ok",
        message: "server running ok"
    })
})
// endpoint for signup --- adding new user into database
app.post("/api/auth/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        
        let userExist = await User.findOne({ email: email });
        
        if (!userExist) {
            return res.json({
                success: false,
                message: "User does not exist"
            });
        }
        if (userExist.password !== password) {
            return res.json({
                success: false,
                message: "Invalid credentials"
            });
        }
        // success
        res.json({
            success: true,
            message: "Login successful",
            user: {
                name: userExist.name,
                email: userExist.email
            }
        });
    } catch (error) {
        console.log(error.message);
        res.json({
            success: false,
            error: error.message
        });
    }
});
