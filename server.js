require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const flowerRoutes = require("./routes/flowerRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

// Log all incoming requests
app.use((req, res, next) => {
  console.log(`Incoming Request: ${req.method} ${req.url}`);
  next();
});

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  serverSelectionTimeoutMS: 5000, 
})
  .then(() => console.log(" Connected to MongoDB Atlas"))
  .catch((err) => {
    console.error("MongoDB Connection Error:", err);
    process.exit(1); // Stop server if connection fails
  });
// Middleware
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));

// ✅ Fixed: Only One Root Route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to the Flower API!" });
});

// ✅ Corrected API Route
app.use("/api/flowers", flowerRoutes); 

// Error Handling for Unknown Routes
app.use((req, res) => {
  console.log(`404 - Route not found: ${req.method} ${req.url}`);
  res.status(404).json({ message: "Route not found" });
});

// Start the Server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
