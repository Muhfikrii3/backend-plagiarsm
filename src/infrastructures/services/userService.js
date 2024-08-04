const User = require("../../domain/entities/User");
const createError = require("http-errors");

const getUserById = async (id) => {
	const user = await User.findById(id);
	if (!user) {
		throw createError(404, "User not found");
	}
	return user;
};

const createUser = async (userData) => {
	const existingUser = await User.findOne({ email: userData.email });
	if (existingUser) {
		throw createError(400, "User already exists");
	}
	const user = new User(userData);
	await user.save();
	return user;
};

const updateUser = async (id, userData) => {
	const user = await User.findByIdAndUpdate(id, userData, { new: true });
	if (!user) {
		throw createError(404, "User not found");
	}
	return user;
};

const deleteUser = async (id) => {
	const user = await User.findByIdAndDelete(id);
	if (!user) {
		throw createError(404, "User not found");
	}
	return user;
};

module.exports = {
	getUserById,
	createUser,
	updateUser,
	deleteUser,
};
