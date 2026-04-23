exports.healthCheck = (req, res) => {
  res.status(200).json({
    status: 'UP',
    env: process.env.NODE_ENV,
    time: new Date()
  });
};