// routes/webhooks.js
const express = require('express');
const router = express.Router();
const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);
// Webhook handler 
router.post('/', (req, res) => {
  const sig = req.headers['stripe-signature'];
  let event;
  try {
    event = stripe.webhooks.constructEvent(
      req.body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET // <-- using env variable
    );
  } catch (err) {
    console.error('Webhook signature verification failed.', err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }
  // Handles successful payment
  if (event.type === 'checkout.session.completed') {
    const session = event.data.object;
    const customerId = session.customer;
    console.log(`Payment succeeded for customer: ${customerId}`);
    // Clear cart 
  }
  res.status(200).json({ received: true });
});
module.exports = router;
