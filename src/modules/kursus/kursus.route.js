const express = require('express')
// const { createKategoriController, getAllKategoriController, editKategoriController, deleteKategoriController} = require('./kategori.controller')
const { getAllKursusController, createKursusController } = require('./kursus.controller')
const router = express.Router()

router.post('/create', createKursusController)
router.get("/list", getAllKursusController);
// router.put('/edit/:idKategori', editKategoriController)
// router.delete('/delete/:idKategori', deleteKategoriController)

module.exports = router;