// src/routes/imageRoutes.js

const express = require('express');
const router = express.Router();

const upload = require('../config/multer'); 
const uploadController = require('../controllers/gambarControl'); 


router.post('/upload', upload.single('gambar'), uploadController.uploadImageSimple );

module.exports = router;