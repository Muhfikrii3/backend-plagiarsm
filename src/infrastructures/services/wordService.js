const Word = require("../../domain/entities/Word");
const createError = require("http-errors");

const createWord = async (wordData) => {
	const word = new Word({
		...wordData,
	});

	return await word.save();
};

const getAllWords = async () => {
	const word = await Word.find({}).sort({ words: 1 });

	return word;
};

const deleteWords = async (wordsId) => {
	const word = await Word.findOneAndDelete({ _id: wordsId });
	if (!Word) {
		throw createError(404, "Word not found");
	}

	return word;
};

module.exports = {
	createWord,
	getAllWords,
	deleteWords,
};
