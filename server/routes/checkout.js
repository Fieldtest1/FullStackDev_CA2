const express = require("express");
const router = express.Router();

router.post("/checkout", (req, res) => {
  const cart = req.body.cart;

  console.log("Order received:", cart);

  res.json({ message: "Order placed successfully!" });
});

module.exports = router;