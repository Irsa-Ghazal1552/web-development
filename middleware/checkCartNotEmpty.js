// Prevents checkout if cart is empty
module.exports = (req, res, next) => {
  if (!req.session.cart || req.session.cart.items.length === 0) {
    return res.redirect("/cart");
  }
  next();
};
