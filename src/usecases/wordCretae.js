const wordRepository = require("../domain/repositories/wordRepository");

const createWord = async (wordData) => {
	const word = await wordRepository.createWord(wordData);
	return word;
};

module.exports = {
	createWord,
};
