const { get } = require('mongoose')
const db = require('../config/mysql')
const getData = require('./rootGET')

const ubahData = (res, params) => {
    const {username, usernameBefore, password} = params

    if(!usernameBefore) {
        res.send(400, 'TOLONG MASUKKAN USERNAME SEBELUMNYA YANG INGIN DIUPDATE')
    } else {
        if (username && password) {
            db.query(`UPDATE regist SET password='${password}' , username='${username}'  WHERE username='${usernameBefore}'`, (err, field) => {
                if (err) {
                    getData(res, 400, err, "GAGAL MENGUPDATE DATA PASSWORD SERTA USERNAME")
                } else {
                    if (field.affectedRows === 0) {
                        getData(res, 404, [], "USERNAME SEBELUMNYA TIDAK DITEMUKAN")
                    }
                    db.query(`SELECT * FROM regist`, (err, data) => {
                        if (err) {
                            getData(res, 400, err, "GAGAL MENCARI DATA SETELAH UPDATE PASSWORD SERTA USERNAME")
                        } else {
                            getData(res, 200, [field, data], "BERHASIL MENGUPDATE DATA PASSWORD SERTA USERNAME DAN MENCARI DATA")
                        }
                    })
                }
            })
        } else {
            res.send(400, 'TOLONG MASUKKAN USERNAME DAN PASSWORD YANG INGIN DIUPDATE')
        }
    }
}

module.exports = ubahData
