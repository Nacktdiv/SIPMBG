const express = require('express')
const app = express()
const bodyparser = require('body-parser')
const env = require('dotenv')
const jwt = require('jsonwebtoken')

const db = require('./src/config/mysql')
const getData = require('./src/routes/rootGET')
const ambilDataQueries = require("./src/routes/searchGET")
const tambahData = require('./src/routes/insertPOST')
const ubahData = require('./src/routes/updatePUT')
const hapusData = require('./src/routes/deleteDELETE')

const authMiddleware = require('./src/routes/auth')

env.config()

app.use(bodyparser.json())

app.post('/login', (req, res) => {
  const jwtSecret = process.env.JWT_SECRET
  const {username, password} = req.body

  db.query(`SELECT * FROM regist WHERE username='${username}' AND password='${password}'`, (err,data) => {
    if (err) {
      res.status(400).json({err})
    } else if (data.length === 0) {
      res.status(200).json({message:"DATA TIDAK DITEMUKAN"})
    } else {
      const payload = {
        id : data[0].id,
        username : data[0].username,
        role : data[0].status
      }
      const token = jwt.sign(payload, jwtSecret, {expiresIn : '1h'})
      res.status(200).json(token)
    }
  })
})

app.get('/', authMiddleware, (req, res) => {
  db.query('SELECT * FROM regist', (err, data) => {
    if (err) {
      console.log(err)
      getData(res, 400, data, "GAGAL AMBIL DATA DARI DATABASE" )
    } else { 
      getData(res, 200, data, "BERHASIL AMBIL DATA DARI DATABASE")
      console.log(data)
    }
  })
})

app.get('/search', (req, res) => {
  let query = req.query
  ambilDataQueries(res, query)
})

app.post('/upload', (req, res) => {
  let body = req.body 
  tambahData(res, body)
})

app.put('/update/:usernameBefore/:username/:password', (req, res) => {
  let params = req.params
  console.log(params)
  ubahData(res, params)
})

app.delete('/delete/:username', (req,res) => {
  const params = req.params
  hapusData(res, params)
})

app.listen(process.env.PORT, () => {
  console.log(`Server berjalan di http://localhost:${process.env.PORT}`)
})