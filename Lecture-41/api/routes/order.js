const express = require("express");
const router = express.Router();
const OrderBook = require("../service/order");

let ob = new OrderBook("BTCUSD");

router.post("/", async (req, res) => {
    try {
        const { side, type, price, quantity, user } = req.body;
        const response = ob.placeOrder(side, type, price, quantity, user);
        res.status(200).json({
            message: "Order placed successfully",
            order: response,
            book: ob.getBookSnapShot()
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

module.exports = router;
