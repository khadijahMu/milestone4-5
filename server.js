require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const flowerRoutes = require("./routes/flowerRoutes"); 
const app = express();
const PORT = process.env.PORT || 5000;
//Log all incoming requests
app.use((req, res, next) => {
  console.log(`Incoming Request: ${req.method} ${req.url}`);
  next();
});
// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch((err) => console.error("MongoDB Atlas Connection Error:", err));
//Middleware
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));
//Root Route
app.get("/", (req, res) => {
  res.send("Welcome to the Flower API!");
});
//  Flower Routes 
app.use("/flowers", flowerRoutes); 
// 404 Error Handling
app.use((req, res) => {
  console.log(`404 - Route not found: ${req.method} ${req.url}`);
  res.status(404).json({ message: "Route not found" });
});
//  Start the Server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
