const Transaction = require('../models/Transaction');

exports.createTransaction = async (data) => {
  return await Transaction.create(data);
};

exports.getTransactions = async () => {
  return await Transaction.find();
};