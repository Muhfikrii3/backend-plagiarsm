const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const { authenticateToken } = require("../middlewares/utilities");
const asyncHandler = require("../middlewares/asyncHandler");

router.get(
	"/get-user",
	authenticateToken,
	asyncHandler(userController.getUser)
);

module.exports = router;
