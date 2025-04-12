
const express = require('express');
const router = express.Router();
const Flower = require('../models/Flower');
// Display all flowers
router.get('/flowers', async (req, res) => {
  try {
    const flowers = await Flower.find();
    res.render('flowers', { pageTitle: 'All Flowers', flowers });
  } catch (err) {
    res.status(500).send('Error retrieving flowers');
  }
});
// Display form to add a new flower
router.get('/add-flower', (req, res) => {
  res.render('add-flower', { pageTitle: 'Add New Flower' });
});
// Handle form submission to add a new flower
router.post('/add-flower', async (req, res) => {
  const { name, category, price, description, imageUrl } = req.body;
  const newFlower = new Flower({ name, category, price, description, imageUrl });
  try {
    await newFlower.save();
    res.redirect('/admin/flowers');
  } catch (err) {
    res.status(500).send('Error adding flower');
  }
});
module.exports = router;
