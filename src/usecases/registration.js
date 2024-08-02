const userRepository = require("../domain/repositories/userRepository");

const createUser = async (userData) => {
	const existingUser = await userRepository.findByEmail(userData.email);
	if (existingUser) {
		throw new Error("User already exists");
	}

	const user = await userRepository.createUser(userData);
	return user;
};

module.exports = {
	createUser,
};
