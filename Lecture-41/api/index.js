const express = require("express");
const app = express();
const orderRoute = require("./routes/order");

app.use(express.json());
app.use("/api/v1/order", orderRoute);

app.listen(3000, () => {
    console.log("Server started");
});
