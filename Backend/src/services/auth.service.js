const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { findEmail, findById } = require('../services/user.service');
const AppError = require('../errors/appError');

const login = async (email, password) => {
  try {
    const user = await findEmail(email);

    if (!user) {
      throw new AppError('authentication failed, email / password does not correct', 401);
    }

    const validPassword = await bcrypt.compare(password, user.password);

    if (!validPassword) {
      throw new AppError('authentication failed email / password does not correct', 401);
    }

    const token = jwt.sign(
      {
        id: user.id,
      },
      process.env.AUTH_SECRET,
      {
        expiresIn: process.env.AUTH_TTL
      }
    );

    return { token };
  } catch (error) {
    throw error;
  }
}

const validToken = async (token) => {
  try {
    if (!token) {
      throw new AppError('authentication failed, token is required', 401);
    }

    let id;

    try {
      const obj = jwt.verify(token, process.env.AUTH_SECRET);

      id = obj.id
    } catch (error) {
      throw new AppError('authentication failed, invalid token', 401, token);
    }

    const user = await findById(id);

    if (!user) {
      throw new AppError('authentication failed, invalid token', 401);
    }

    return user;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  login,
  validToken
}
