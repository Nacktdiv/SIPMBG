const env = require('dotenv');
const jwt = require('jsonwebtoken');

env.config()
const jwtSecret = process.env.JWT_SECRET

const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        return res.status(401).json({ message: 'AUTHORIZATION HEADER TIDAK ADA' });
    }

    const token = authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: 'TOKEN TIDAK ADA' });
    }

    try {
        const decoded = jwt.verify(token, jwtSecret);

        req.user = decoded;

        next();
    } catch (error) {
        return res.status(403).json({ message: 'INVALID ATAU TOKEN KADALUARSA' });
    }
}

module.exports = authMiddleware
