
const mongoose = require('mongoose');
const flowerSchema = new mongoose.Schema({
  name: String,
  category: String,
  price: Number,
  description: String,
  imageUrl: String
}, { timestamps: true });
module.exports = mongoose.models.Flower || mongoose.model('Flower', flowerSchema);
