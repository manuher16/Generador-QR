const { validToken } = require('../services/user.service');

const validJwt = async (req, res, next) => {
  try {
    const token = req.header('Authorization');

    const user = await validToken(token);

    req.user = user;

    next();
  } catch (error) {
    next(error);
  }
}

module.exports = validJwt;