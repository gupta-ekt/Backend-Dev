const env = require('./config/env/env'); // load env first
const app = require('./app');
const connectDB = require('./config/db');
const logger = require('./config/logger');

connectDB();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  logger.info(`🚀 Server running in ${env} on port ${PORT}`);
});