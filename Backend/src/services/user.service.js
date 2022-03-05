const bcrypt = require('bcrypt');
const User = require('../models/User');

const registerUser = async (name, email, password) => {
  try {
    password = await bcrypt.hash(password, 10);

    const newUser = new User({
      name,
      email,
      password,
    });

    await newUser.save();

    return newUser;
  } catch (error) {
    throw error;
  }
}

const findEmail = async (email) => {
  return await User.findOne({ email });
}

const findById = async (id) => {
  return await User.findById(id);
}

module.exports = {
  registerUser,
  findEmail,
  findById
}
