const express = require('express');
const transactionRoutes = require('./routes/transactionRoutes');
const errorHandler = require('./middlewares/errorHandler');
const requestLogger = require('./middlewares/requestLogger');
const { healthCheck } = require('./health/healthController');
const { trackRequest, getMetrics } = require('./health/metrics');

const app = express();

app.use(express.json());
app.use(requestLogger);
app.use(trackRequest);

// Routes
app.use('/api/transactions', transactionRoutes);
app.get('/health', healthCheck);
app.get('/metrics', getMetrics);

// Error handler
app.use(errorHandler);

module.exports = app;