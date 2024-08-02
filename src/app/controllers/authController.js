const {
	registration,
	login,
} = require("../../infrastructure/services/authService");
const { handleResponse } = require("../../infrastructure/services/response");
const asyncHandler = require("../middlewares/asyncHandler");

const registrationUser = asyncHandler(async (req, res) => {
	const { user, accessToken } = await registration(req.validatedBody);
	return handleResponse(res, 201, "Registration Successful", {
		user,
		accessToken,
	});
});

const loginUser = asyncHandler(async (req, res) => {
	const { email, accessToken } = await login(req.validatedBody);
	return handleResponse(res, 201, "Login Successful", {
		email,
		accessToken,
	});
});

module.exports = {
	registrationUser,
	loginUser,
};
