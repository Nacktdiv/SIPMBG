// server.js

const express = require('express');
const bodyParser = require('body-parser'); // Untuk membaca data JSON dari body request
const { createIdentity } = require('./src/services/appwriteService'); // Sesuaikan path jika berbeda

const app = express();
const PORT = 3001;

// --- Middleware ---
// 1. Mengizinkan Express membaca body request dalam format JSON
app.use(bodyParser.json()); 

// 2. Mengatur CORS (wajib jika frontend dan backend berbeda domain)
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // Ganti * dengan domain frontend Anda
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

// --- Endpoint API POST ---
app.post('/api/identities', async (req, res) => {
    // Data yang dikirim dari frontend (body request)
    const { name, description, priorityLevel } = req.body; 
    
    // Pastikan data wajib (name) ada
    if (!name) {
        return res.status(400).json({ message: 'Nama wajib diisi.' });
    }

    // Buat objek data yang akan dikirim ke Appwrite
    const identityData = { 
        name, 
        description: description || 'N/A', 
        priorityLevel: priorityLevel || 'Normal'
        // JANGAN sertakan createdBy atau createdAt
    };

    try {
        // Panggil fungsi layanan yang menggunakan Server SDK Appwrite
        const newDocument = await createIdentity(identityData);
        
        // Kirim respons sukses kembali ke klien
        res.status(201).json({
            message: 'Data berhasil disimpan di Appwrite.',
            data: newDocument
        });

    } catch (error) {
        console.error("Express Error:", error);
        // Tangkap AppwriteException dan berikan pesan error generik
        res.status(500).json({ 
            message: 'Gagal menyimpan data.',
            errorDetail: error.message 
        });
    }
});

// --- Jalankan Server ---
app.listen(PORT, () => {
    console.log(`🚀 Server Express berjalan di http://localhost:${PORT}`);
});