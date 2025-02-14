const express = require("express");
const upload = require("../config/multerConfig"); 
const { addFlower, getAllFlowers, deleteFlower } = require("../controllers/flowerController");
const router = express.Router();
//Route to get all flowers
router.get("/", getAllFlowers);
//Route to add a new flower
router.post("/", upload.single("image"), addFlower);
//Route to delete a flower by ID
router.delete("/:id", deleteFlower);
module.exports = router;
