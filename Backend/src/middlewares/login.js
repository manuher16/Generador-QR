const { body, check } = require('express-validator');
const AppError = require('../errors/appError');
const { findEmail } = require('../services/user.service');
const validResult = require('./validResult');

const emailRequired = check('email', 'email is required').not().isEmpty();
const emailValid = body('email').trim().isEmail().withMessage('email is invalid').normalizeEmail().toLowerCase();
const emailExists = check('email').custom(
  async (email) => {
    const emailFound = await findEmail(email);

    if (!emailFound) {
      throw new AppError('Email no exists', 400);
    }
  }
);
const passwordRequired = check('password', 'password is required').not().isEmpty();
const passwordValid = body('password').trim().isLength({ min: 8, max: 30 }).withMessage('password field must be between 8 and 32 characters long');

const loginValidator = [
  emailRequired,
  emailValid,
  emailExists,
  passwordRequired,
  passwordValid,
  validResult
];

module.exports = loginValidator;