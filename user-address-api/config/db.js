const dotenv = require('dotenv');

dotenv.config();



const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MongoDB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('✅ MongoDB connected successfully');
  } catch (error) {
    console.error('❌ MongoDB connection failed:', error.message);
    process.exit(1);
  }
};

module.exports = connectDB;

// Allow standalone execution for connection testing
if (require.main === module) {
  require('dotenv').config();
  connectDB();
}
