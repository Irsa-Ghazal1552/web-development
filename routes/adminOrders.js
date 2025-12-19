const express = require("express");
const router = express.Router();
const Order = require("../models/Order");
const adminOnly = require("../middleware/adminOnly");

// List all orders for admin
router.get("/admin/orders", adminOnly, async (req, res) => {
  const orders = await Order.find();
  res.render("admin/orders", { orders });
});

// Confirm order
router.get("/admin/orders/confirm/:id", adminOnly, async (req, res) => {
  await Order.findByIdAndUpdate(req.params.id, { status: "Confirmed" });
  res.redirect("/admin/orders");
});

// Cancel order
router.get("/admin/orders/cancel/:id", adminOnly, async (req, res) => {
  await Order.findByIdAndUpdate(req.params.id, { status: "Cancelled" });
  res.redirect("/admin/orders");
});

module.exports = router;
