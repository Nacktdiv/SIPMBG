// src/controllers/uploadController.js (Versi Sederhana)

const SimpleImageModel = require('../models/gambarModel'); // <--- Import Model Sederhana

exports.uploadImageSimple = async (req, res) => {
    if (!req.file) {
        return res.status(400).json({ message: 'Tidak ada file yang diunggah.' });
    }

  // Ambil hanya filepath dan mimetype dari objek req.file
    const { path: filepath, mimetype } = req.file; 

    try {
        // Simpan dokumen ringkas di MongoDB
        const newImage = await SimpleImageModel.create({
        filepath,
        mimetype
        });

        res.status(201).json({
        success: true,
        message: 'Metadata gambar ringkas berhasil disimpan.',
        data: {
            id: newImage._id,
            filepath: newImage.filepath // Path yang tersimpan
        }
        });

    } catch (error) {
        console.error('Database Error:', error);
        // Jika ada error (misalnya path kembar), berikan pesan error
        res.status(500).json({ message: 'Gagal menyimpan data ke database.' });
    }
};