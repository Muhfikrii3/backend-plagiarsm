const mongoose = require("mongoose");

const wordSchema = new mongoose.Schema({
	words: { type: String, required: true },
	kataDasar: { type: String, required: true },
	prefix: { type: String, required: false },
	suffix: { type: String, required: false },
	createdOn: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Word", wordSchema);
