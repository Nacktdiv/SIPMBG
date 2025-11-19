// src/models/ImageModelSimple.js

const mongoose = require('mongoose');

// Schema yang disederhanakan
const simpleImageSchema = new mongoose.Schema({
  // Jalur lengkap di server (C:\...\uploads\nama-file.png)
  filepath: {
    type: String,
    required: true,
    unique: true 
  },
  // Tipe MIME (e.g., 'image/jpeg', 'image/png')
  mimetype: {
    type: String
  },
  // Timestamp kapan data dibuat
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('SimpleImage', simpleImageSchema);