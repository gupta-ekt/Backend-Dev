const service = require('../services/transactionService');
const AppError = require('../utils/AppError');

exports.createTransaction = async (req, res, next) => {
  try {
    const tx = await service.createTransaction(req.body);
    res.status(201).json(tx);
  } catch (err) {
    next(new AppError('Transaction failed', 400));
  }
};

exports.getTransactions = async (req, res, next) => {
  try {
    const data = await service.getTransactions();
    res.json(data);
  } catch (err) {
    next(err);
  }
};