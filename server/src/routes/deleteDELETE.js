const db = require ('../config/mysql')
const getData = require('./rootGET')

const hapusData = (res, params) => {
    const {username} = params
    if (username) {
        db.query(`DELETE FROM regist WHERE username=?`, [username] ,(err, field) => {
            if (err){
                getData(res, 400, err, "GAGAL MENGHAPUS DATA")
            } else {
                if (field.affectedRows === 0) {
                    getData(res, 404, [], "USERNAME TIDAK DITEMUKAN")
                }
                db.query(`SELECT * FROM regist`, (err, data) => {
                    if (err) {
                        getData(res, 400, err, "GAGAL MENCARI DATA SETELAH MENGHAPUS DATA")
                    } else {
                        getData(res, 200, [field, data], "BERHASIL MENGHAPUS DATA DAN MENCARI DATA")
                    }
                })
            }
        })
    } else {
        res.send(400, 'TOLONG MASUKKAN USERNAME YANG INGIN DIHAPUS')
    }
}

module.exports = hapusData