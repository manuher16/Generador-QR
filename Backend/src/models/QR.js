const { Schema, model } = require('mongoose');

const qrSchema = new Schema({
  idUser: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  content: {
    type: Object,
  },
  views: {
    type: Number,
  },
  type: {
    type: String,
    enum: ['url', 'wifi', 'mp3', 'vcard', 'appStores', 'text', 'twitter', 'images', 'e-mail', 'facebook', 'sms', 'pdf'],    
  },
  image: {
    type: String,
  }
});

module.exports = model('QR', qrSchema);