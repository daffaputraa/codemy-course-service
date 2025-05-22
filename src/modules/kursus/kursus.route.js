const express = require('express')
// const { createKategoriController, getAllKategoriController, editKategoriController, deleteKategoriController} = require('./kategori.controller')
const { getAllKursusController, createKursusController, editKursusController } = require('./kursus.controller')
const router = express.Router()
const upload = require('../../middleware/multer_config')

router.post('/create', upload.single('mkursus_thumbnail'), createKursusController)
router.get("/list", getAllKursusController);
// router.put("/edit/:idKursus", upload.single('mkursus_thumbnail'), editKursusController);
// router.delete('/delete/:idKategori', deleteKategoriController)

module.exports = router;