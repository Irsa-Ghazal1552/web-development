const express = require("express");
const session = require("express-session");
const mongoose = require("mongoose");
const checkoutRoutes = require("./routes/checkout");
const adminRoutes = require("./routes/adminOrders");

const app = express();

// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/shopDB")
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error("MongoDB connection error:", err));

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(session({
  secret: "secret-key",
  resave: false,
  saveUninitialized: true
}));
app.set("view engine", "ejs");

// Mount routes
app.use("/lab-final", checkoutRoutes);
app.use("/lab-final", adminRoutes);

// Start server
app.listen(3000, () => console.log("Server running on http://localhost:3000"));
