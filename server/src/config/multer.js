// src/config/multerConfig.js

const multer = require('multer');
const path = require('path');

// Settingan penyimpanan 
const storage = multer.diskStorage({
    // Tentukan folder tujuan penyimpanan file
    destination: (req, file, cb) => {
        // Jalur penyimpanan absolut: root_proyek/uploads
        cb(null, path.join(__dirname, '..', '..', 'uploads')); 
    },
    // Tentukan nama file
    filename: (req, file, cb) => {
        // Membuat nama file unik: fieldname-timestamp.ext
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

// inisiasi multer
const upload = multer({ 
    storage: storage,
    limits: {
        fileSize: 5 * 1024 * 1024 
    }
});

module.exports = upload;