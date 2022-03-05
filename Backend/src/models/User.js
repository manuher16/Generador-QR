const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  loginGoogle: {
    type: Object
  },
  loginFacebook: {
    type: String
  },
  sessionStatus: {
    type: Boolean
  }
});

module.exports = model('User', UserSchema);