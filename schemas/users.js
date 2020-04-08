const Joi = require('@hapi/joi');

const userSchema = Joi.object({
  userId: Joi.string()
    .length(36)
    .required(),

  login: Joi.string()
    .alphanum()
    .min(2)
    .max(20)
    .required(),

  password: Joi.string()
    .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
    .required(),

  age: Joi.number()
    .integer()
    .min(4)
    .max(130)
    .required(),

  isDeleted: Joi.boolean()
    .required()
});

export default userSchema;

