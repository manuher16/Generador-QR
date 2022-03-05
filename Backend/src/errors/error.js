const notFound = (req, res, next) => {
  const error = new Error('Not found');

  error.status = 400;

  next(error);
}

const errorHandler = (error, req, res, next) => {
  const status = error.status || 500;

  console.error(`${status} - ${error.message} - ${req.originalUrl} - ${req.method} - ${req.ip}`);

  console.error(error.stack);

  res.status(status).json({
    error: {
      status,
      message: error.message,
      detail: error.data
    }
  });
}

module.exports = {
  notFound,
  errorHandler
}