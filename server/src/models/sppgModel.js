// src/models/SPPGModel.js

const mongoose = require('mongoose');

const SPPGSchema = new mongoose.Schema({
  nama_sppg: {
    type: String,
    required: true,
    trim: true
  },
  provinsi: {
    type: String,
    required: true
  },
  kota: {
    type: String,
    required: true
  }, 
  lokasi:{
    type: String,
    required: true
  },
}, {
  // Aktifkan timestamp: menambahkan createdAt dan updatedAt secara otomatis
  timestamps: true 
});

module.exports = mongoose.model('SPPG', SPPGSchema);