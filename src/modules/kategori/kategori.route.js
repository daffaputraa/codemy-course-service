const express = require('express')
const { createKategoriController, getAllKategoriController, editKategoriController, deleteKategoriController} = require('./kategori.controller')
const router = express.Router()

router.post('/create', createKategoriController)
router.get('/list', getAllKategoriController)
router.put('/edit/:idKategori', editKategoriController)
router.delete('/delete/:idKategori', deleteKategoriController)

module.exports = router;