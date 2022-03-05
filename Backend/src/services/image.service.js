const AWS = require('aws-sdk');
const AppError = require('../errors/appError');

require('dotenv').config({ encoding: 'latin1' });

const s3 = new AWS.S3({
  accessKeyId: process.env.accessKeyId,
  secretAccessKey: process.env.secretAccessKey
});

const uploadImage = (name, image, type) => {
  return new Promise((resolve, reject) => {
    const params = {
      Bucket: process.env.BUCKET_NAME,
      key: name,
      Body: image,
      ContentType: type,
      ACL: 'public-read'
    };

    s3.upload(params, (err, data) => {
      if (err) {
        reject(new AppError(err.message, 502));
      }
      resolve(`https://${process.env.BUCKET_NAME}.s3.amazonaws.com/${name}`);
    });
  });
}

const deleteImage = (key) => {
  key = key.split('/')[3];

  return new Promise((resolve, reject) => {
    const params = {
      Bucket: process.env.BUCKET_NAME,
      Key: key
    };

    s3.deleteObject(params, (err, data) => {
      if (err) {
        reject(new AppError(err.message, 502));
      }
      resolve(data);
    });
  });
}



module.exports = {
  uploadImage,
  deleteImage
}