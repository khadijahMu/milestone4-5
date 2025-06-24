require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");
const upload = require('./config/multerConfig');
const Flower = require('./models/Flower');
const checkoutRoutes = require('./routes/checkout');
const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);
const app = express();
const PORT = process.env.PORT || 5000;
// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.error(" MongoDB Error:", err));

/*WEBHOOK */
app.post('/webhook', express.raw({ type: 'application/json' }), (req, res) => {
  const sig = req.headers['stripe-signature'];
  let event;
  try {
    event = stripe.webhooks.constructEvent(
      req.body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (err) {
    console.error('⚠️ Stripe Webhook Error:', err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }
  if (event.type === 'checkout.session.completed') {
    const session = event.data.object;
    const customerId = session.customer;
    console.log("Payment successful for:", customerId);
  }
  res.json({ received: true });
});
/*Middleware  */
app.use(cors());
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));
/*Stripe Checkout */
app.use('/checkout', checkoutRoutes);
/*Static Files */
app.use('/admin', express.static(path.join(__dirname, 'admin')));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
/*API Routes */
app.get("/api/flowers", async (req, res) => {
  try {
    const flowers = await Flower.find();
    res.json(flowers);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch flowers" });
  }
});
app.post('/admin/add-flower', upload.single('image'), async (req, res) => {
  try {
    const newFlower = new Flower({
      name: req.body.name,
      category: req.body.category,
      price: req.body.price,
      description: req.body.description,
      image: `/uploads/${req.file.filename}`
    });
    await newFlower.save();
    res.json({ success: true, flower: newFlower });
  } catch (error) {
    res.status(500).json({ error: "Failed to add flower" });
  }
});
app.delete('/api/flowers/:id', async (req, res) => {
  try {
    await Flower.findByIdAndDelete(req.params.id);
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete flower" });
  }
});
/*HTML Routes */
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "admin", "index.html"));
});
app.get("/admin/add-flower", (req, res) => {
  res.sendFile(path.join(__dirname, "admin", "AddFlowers.html"));
});
/*Starts the Server*/
app.listen(PORT, () => console.log(` Server running on port ${PORT}`));
