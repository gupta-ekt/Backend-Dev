const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    console.log(`DB connected: ${process.env.NODE_ENV}`);
  } catch (err) {
    console.error('DB connection failed', err);
    process.exit(1);
  }
};

module.exports = connectDB;