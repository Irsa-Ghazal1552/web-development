// Allows access only for admin@shop.com
module.exports = (req, res, next) => {
  if (req.session.user?.email !== "admin@shop.com") {
    return res.status(403).send("Access Denied");
  }
  next();
};
