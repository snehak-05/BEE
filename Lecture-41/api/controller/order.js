const OrderBook = require("../service/order");
const { publisher } = require("../../shared/index");

let ob = new OrderBook("BTCUSD"); // global shared instance

module.exports.postPlaceOrder = async (req, res) => {
  try {
    const { side, type, price, quantity, user } = req.body;
    const response = ob.placeOrder(side, type, price, quantity, user);

    // publish the new snapshot to Redis
    await publisher.publish("bookupdate", JSON.stringify(ob.getBookSnapShot()));

    res.json({
      message: "Order placed successfully",
      order: response,
      book: ob.getBookSnapShot(),
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to place order" });
  }
};
