
const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./src/config/db');
const cors = require('cors');

// IMPORT ROUTES

// END ROUTES

dotenv.config();

connectDB();

const app = express();
const PORT = process.env.PORT || 3000;

// START

// MDWARE

app.use(express.json()); 

const corsOptions = {
  origin: 'http://localhost:5173', // Ganti dengan URL frontend Anda
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type'],
};
app.use(cors(corsOptions));

// END MDWARE
app.get('/', (req, res) => {
  res.status(200).json({ message: 'Server is running successfully!' });
});

app.use('/uploads', express.static('uploads'));

// END

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`Access: http://localhost:${PORT}`);
});