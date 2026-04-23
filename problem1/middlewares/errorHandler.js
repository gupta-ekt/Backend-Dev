const logger = require('../config/logger');

module.exports = (err, req, res, next) => {
  // Log detailed error
  logger.error({
    message: err.message,
    stack: err.stack,
    url: req.originalUrl,
    method: req.method
  });

  // Send safe response
  if (err.isOperational) {
    return res.status(err.statusCode).json({
      status: err.status,
      message: err.message
    });
  }

  // Unknown errors
  return res.status(500).json({
    status: 'error',
    message: 'Something went wrong!'
  });
};