// routes/checkout.js
const express = require('express');
const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);
const router = express.Router();

router.post('/create-session', async (req, res) => {
  const { items } = req.body;

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      line_items: items.map(item => ({
        price_data: {
          currency: 'usd',
          product_data: { name: item.id },
          unit_amount: item.price_cents,
        },
        quantity: item.quantity,
      })),
      success_url: `${process.env.FRONTEND_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.FRONTEND_URL}/cancel`,
    });
    res.json({ id: session.id });
  } catch (err) {
    console.error('Error creating Stripe session:', err);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
