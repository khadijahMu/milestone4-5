require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");
const flowerRoutes = require('./routes/flowerRoutes');
const adminRoutes = require('./routes/adminRoutes');
const app = express();
const PORT = process.env.PORT || 5000;
// MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.error("MongoDB Error:", err));
// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Static Files
app.use('/admin', express.static(path.join(__dirname, 'admin')));
app.use('/uploads', express.static('uploads'));
// Routes
app.use("/api/flowers", flowerRoutes);
app.use("/admin/api", adminRoutes);
//HTML routes
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "admin", "flowers.html"));
});
app.get("/admin/add-flower", (req, res) => {
  res.sendFile(path.join(__dirname, "admin", "AddFlowers.html"));
});
// 404 Handler
app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
