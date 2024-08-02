const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const validation = require("../middlewares/validation");

router.post(
	"/register",
	validation("registerSchema"),
	authController.registrationUser
);
router.post("/login", validation("loginSchema"), authController.loginUser);

module.exports = router;
