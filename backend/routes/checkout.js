// routes/checkout.js
const express = require("express");
const router = express.Router();
const Stripe = require("stripe");
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);
router.post("/create-checkout-session", async (req, res) => {
  const { cartItems } = req.body;
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: cartItems.map(item => ({
        price_data: {
          currency: "usd",
          product_data: {
            name: item.name,
          },
          unit_amount: item.price * 100,
        },
        quantity: item.quantity,
      })),
      mode: "payment",
      success_url: "http://localhost:3000/payment-success",
      cancel_url: "http://localhost:3000/cart",
    });
    res.json({ url: session.url });
  } catch (err) {
    res.status(500).json({ error: "Failed to create Stripe session" });
  }
});
module.exports = router;
