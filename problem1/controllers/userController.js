const AppError = require('../utils/AppError');

exports.getUser = (req, res, next) => {
  const user = null; // simulate missing user

  if (!user) {
    return next(new AppError('User not found', 404));
  }

  res.status(200).json({
    status: 'success',
    data: user
  });
};