const mongoose = require("mongoose");
require("dotenv").config();

let isConnected = false;

const connectDB = async () => {
  if (isConnected) {
    return; // Already connected
  }

  try {
    const db = await mongoose.connect(process.env.MONGODB_URI);
    isConnected = true;
    console.log(`✅ MongoDB connected to ${db.connection.host}`);
  } catch (error) {
    console.error("❌ MongoDB connection error:", error);
    throw error;
  }
};

module.exports = connectDB;
