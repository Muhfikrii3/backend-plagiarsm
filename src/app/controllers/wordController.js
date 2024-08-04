const WordService = require("../../infrastructure/services/wordService");
const { handleResponse } = require("../../infrastructure/services/response");
const asyncHandler = require("../middlewares/asyncHandler");

const createWord = asyncHandler(async (req, res) => {
	const word = await WordService.createWord(req.validatedBody);

	return handleResponse(res, 201, "Word added successfully", word);
});

const getAllWords = asyncHandler(async (req, res) => {
	const words = await WordService.getAllWords();

	return handleResponse(res, 200, "All words retrieved successfully", words);
});

const deleteWords = asyncHandler(async (req, res) => {
	const wordsId = req.params.wordsId;
	await WordService.deleteWords(wordsId);

	return handleResponse(res, 200, "Words deleted successfully");
});

module.exports = {
	createWord,
	getAllWords,
	deleteWords,
};
