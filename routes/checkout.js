const express = require("express");
const router = express.Router();
const { checkoutController } = require("../controllers/checkoutController");
const checkCartNotEmpty = require("../middleware/checkCartNotEmpty");

// Checkout POST route
router.post("/checkout", checkCartNotEmpty, checkoutController);

// Order confirmation GET route
router.get("/order-confirmation/:id", (req, res) => {
  const orderId = req.params.id;
  res.render("order-confirmation", { orderId });
});

module.exports = router;
