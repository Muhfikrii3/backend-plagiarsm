const User = require("../entities/User");

const findById = async (id) => {
	return await User.findById(id);
};

const findByEmail = async (email) => {
	return await User.findOne({ email });
};

const createUser = async (userData) => {
	const user = new User(userData);
	return await user.save();
};

module.exports = {
	findById,
	findByEmail,
	createUser,
};
