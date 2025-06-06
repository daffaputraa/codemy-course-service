const userRoute = require('../modules/user/user.routes')
const kategoriRoute = require('../modules/kategori/kategori.route')
const kursusRoute = require('../modules/kursus/kursus.route')
const episodeRoute = require('../modules/episode/episode.routes')
const bagianRoute = require('../modules/bagian/bagian.routes')

const express = require('express')
const router = express.Router()

router.use("/user", userRoute)
router.use("/kategori", kategoriRoute)
router.use("/kursus", kursusRoute);
router.use("/episode", episodeRoute);
router.use("/bagian", bagianRoute);

module.exports = router
