const express = require("express");
const router = express.Router();
const wordController = require("../controllers/wordController");
const validation = require("../middlewares/validation");

router.post("/create", validation("wordSchema"), wordController.createWord);
router.get("/get-all-words", wordController.getAllWords);
router.delete("/delete-words/:wordsId", wordController.deleteWords);

module.exports = router;
