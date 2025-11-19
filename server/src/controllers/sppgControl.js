// src/controllers/sppgController.js

const SPPG = require('../models/sppgModel');

// --- A. FUNGSI MENAMBAH DATA SPPG (POST) ---
exports.createSPPG = async (req, res) => {
  try {
    // Ambil data dari body request
    const { nama_sppg, provinsi, kota, lokasi } = req.body;

    // 1. Cek apakah id_sppg sudah ada
    const existingSPPG = await SPPG.findOne({ nama_sppg });
    if (existingSPPG) {
      return res.status(400).json({ 
        success: false, 
        message: 'nama SPPG sudah terdaftar' 
      });
    }

    // 2. Buat objek SPPG baru
    const newSPPG = new SPPG({
      nama_sppg, provinsi, kota, lokasi
    });

    // 3. Simpan ke database
    const savedSPPG = await newSPPG.save();

    res.status(201).json({
      success: true,
      message: 'Data SPPG Ditambahkan',
      data: savedSPPG
    });

  } catch (error) {
    console.error('Error creating SPPG:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Data SPPG Gagal Ditambahkan',
      error: error.message
    });
  }
};

// --- B. FUNGSI MENDAPATKAN SEMUA DATA SPPG (GET) ---
exports.getAllSPPGs = async (req, res) => {
  try {
    const sppgs = await SPPG.find().select('-__v'); // .select('-__v') menyembunyikan field versi Mongoose

    res.status(200).json({
      success: true,
      count: sppgs.length,
      data: sppgs
    });

  } catch (error) {
    console.error('Error fetching SPPGs:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Gagal mengambil data SPPG.' 
    });
  }
};
