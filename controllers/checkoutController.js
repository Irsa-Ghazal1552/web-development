const Order = require("../models/Order");

// Controller to handle checkout
exports.checkoutController = async (req, res) => {
  const cart = req.session.cart;

  if (!cart || cart.items.length === 0) {
    return res.redirect("/cart");
  }

  try {
    const order = new Order({
      customerName: req.body.customerName,
      email: req.body.email,
      items: cart.items,
      totalAmount: cart.total
    });

    await order.save();

    // Clear cart after order
    req.session.cart = null;

    res.redirect(`/lab-final/order-confirmation/${order._id}`);
  } catch (err) {
    console.error(err);
    res.send("Error creating order");
  }
};
