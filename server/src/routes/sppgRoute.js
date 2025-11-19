// src/routes/sppgRoutes.js

const express = require('express');
const router = express.Router();
const sppgController = require('../controllers/sppgControl');

// POST /api/sppg  -> Menambah data SPPG baru
router.post('/', sppgController.createSPPG);

// GET /api/sppg  -> Mendapatkan semua data SPPG
router.get('/', sppgController.getAllSPPGs);

module.exports = router;