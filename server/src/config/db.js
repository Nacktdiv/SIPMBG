// src/config/db.js

const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // Menggunakan MONGO_URI dari .env
    const conn = await mongoose.connect(process.env.MONGO_URI); 

    console.log(`✅ MongoDB Connected successfully. Host: ${conn.connection.host}`);
  } catch (error) {
    console.error(`❌ Error connecting to MongoDB: ${error.message}`);
    // Keluar dari aplikasi jika gagal terhubung ke database
    process.exit(1); 
  }
};

module.exports = connectDB;