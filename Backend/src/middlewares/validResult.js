const { validationResult } = require('express-validator');
require('../config/terminalColors')
const AppError = require('../errors/appError');

const validResult = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    throw new AppError('validation errors', 400, errors.errors);
  }

  next();
}

module.exports = validResult;