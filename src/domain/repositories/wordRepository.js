const Word = require("../entities/Word");

const createWord = async (wordData) => {
	const word = new Word(wordData);
	return await word.save();
};

module.exports = {
	createWord,
};
