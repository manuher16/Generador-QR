const { registerUser } = require('../services/user.service');
const { login } = require('../services/auth.service');

const newUser = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    const user = await registerUser(name, email, password);

    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
}

const userLogin = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await login(email, password);

    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  newUser,
  userLogin
}
