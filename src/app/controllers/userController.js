const userService = require("../../infrastructure/services/userService");
const { handleResponse } = require("../../infrastructure/services/response");
const asyncHandler = require("../middlewares/asyncHandler");

const getUser = asyncHandler(async (req, res) => {
	const userId = req.user._id;
	const user = await userService.getUserById(userId);

	return handleResponse(res, 200, "User found", {
		fullName: user.fullName,
		email: user.email,
		_id: user._id,
		createdOn: user.createdOn,
	});
});

module.exports = {
	getUser,
};
