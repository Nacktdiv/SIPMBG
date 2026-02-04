const db = require('../config/mysql')
const getData = require('./rootGET')

const ambilDataQueries = (res, query) => {
    if (query.username || query.password) {
        db.query(`SELECT * FROM regist WHERE username='${query.username}' OR password='${query.password}'`, (err, data) => {
            if (err) {
                getData(res, 400, err, "GAGAL AMBIL DATA SESUAI QUERY")
            } else if (data.length === 0 ) {
                getData(res, 200, data, "DATA TIDAK DITEMUKAN SESUAI QUERY")
            } else {
                getData(res, 200, data, "BERHASIL AMBIL DATA SESUAI QUERY")
            }
        })
    } else {
        res.send('Tolong masukkan query username atau password').status(201)
    }
}

module.exports = ambilDataQueries