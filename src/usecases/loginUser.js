const userRepository = require("../domain/repositories/userRepository");
const jwt = require("jsonwebtoken");
const config = require("../config/config");

const loginUser = async (loginData) => {
	const user = await userRepository.findByEmail(loginData.email);
	if (!user) {
		throw new Error("User not found");
	}

	const isMatch = await user.comparePassword(loginData.password);
	if (!isMatch) {
		throw new Error("Invalid credentials");
	}

	const accessToken = jwt.sign(
		{ userId: user._id },
		config.accessTokenSecret,
		{ expiresIn: "3600m" }
	);

	return { email: user.email, accessToken };
};

module.exports = {
	loginUser,
};
