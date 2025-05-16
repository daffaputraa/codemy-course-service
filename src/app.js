const express = require('express');
const sequelize = require('./config/db')

const app = express()
app.use(express.json())

require('./models/m_user')

sequelize.authenticate()
    .then(() => console.log(`🟢 Terkoneksi ke database`))
    .then(() => sequelize.sync({alter : true }))
    .then(() =>  console.log('✅ Model sudah disinkronkan ke database'))
    .catch((err) => console.log('🔴 Error koneksi ke db:', err))

module.exports = app;