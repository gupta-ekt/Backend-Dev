let totalRequests = 0;

exports.trackRequest = (req, res, next) => {
  totalRequests++;
  next();
};

exports.getMetrics = (req, res) => {
  res.json({ totalRequests });
};