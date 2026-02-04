const db = require('../config/mysql')
const getData = require('./rootGET')

const tambahData = (res, body) => {
    const {username, password} = body
    if(username && password) {
        db.query(`INSERT INTO regist (username, password) VALUES ('${username}', '${password}')`, (err, field) => {
            if (err) {
                getData(res, 400, err, 'GAGAL MENAMBAH DATA')
            } else {
                db.query(`SELECT * FROM regist`, (err, data) => {
                    if (err) {
                        getData(res, 400, [field, data], 'GAGAL MENCARI DATA SETELAH MENAMBAH DATA')
                    } else {
                        getData(res, 200, [field, data], 'BERHASIL MENCARI DATA DAN MENAMBAH DATA')
                    }
                })
            }
        })
    } else {
        res.send(400, 'TOLONG MASUKKAN USERNAME DAN PASSWORD')
    }
} 

module.exports = tambahData