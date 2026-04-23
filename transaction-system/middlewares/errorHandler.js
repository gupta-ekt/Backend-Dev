const logger = require('../config/logger');

module.exports = (err, req, res, next) => {
  logger.error({
    message: err.message,
    stack: err.stack
  });

  if (err.isOperational) {
    return res.status(err.statusCode).json({
      status: 'fail',
      message: err.message
    });
  }

  res.status(500).json({
    status: 'error',
    message: 'Internal Server Error'
  });
};