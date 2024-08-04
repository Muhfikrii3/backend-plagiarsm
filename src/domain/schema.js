const Joi = require("joi");

const registerSchema = Joi.object({
	fullName: Joi.string().required(),
	email: Joi.string().email().required(),
	password: Joi.string().min(6).required(),
});

const loginSchema = Joi.object({
	email: Joi.string().email().required(),
	password: Joi.string().required(),
});

const wordSchema = Joi.object({
	words: Joi.string().required(),
	kataDasar: Joi.string().required(),
	prefix: Joi.string().optional(),
	suffix: Joi.string().optional(),
});

module.exports = {
	registerSchema,
	loginSchema,
	wordSchema,
};
