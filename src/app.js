const express = require('express');
const sequelize = require('./config/db');
const router = require('./routes');
const app = express()

app.use(express.json())
app.use('/uploads', express.static('public/uploads'))
app.use('/api', router)

require('./models/m_user')
require('./models/r_kategori')
require('./models/m_kursus')
require('./models/r_episode')

sequelize.authenticate()
    .then(() => console.log(`🟢 Terkoneksi ke database`))
    .then(() => sequelize.sync({ alter : true }))
    .then(() =>  console.log('✅ Model sudah disinkronkan ke database'))
    .catch((err) => console.log('🔴 Error koneksi ke db:', err))

module.exports = app; 