require("dotenv").config(); 
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const flowerRoutes = require("./routes/flowerRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

// ✅ Check if MONGO_URI is loaded
if (!process.env.MONGO_URI) {
  console.error("❌ MONGO_URI is undefined! Make sure it's set in your .env file and Render.");
  process.exit(1); // Stop server if no MongoDB URI
}

// ✅ MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 5000, // Timeout after 5s
})
  .then(() => console.log("✅ Connected to MongoDB Atlas"))
  .catch((err) => {
    console.error("❌ MongoDB Connection Error:", err);
    process.exit(1); // Stop the server if connection fails
  });

// Middleware
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));

// Root Route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to the Flower API!" });
});

// API Routes
app.use("/api/flowers", flowerRoutes);

// Handle 404 Errors
app.use((req, res) => {
  console.log(`404 - Route not found: ${req.method} ${req.url}`);
  res.status(404).json({ message: "Route not found" });
});

// Start the Server
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
