const express = require('express')
const { getAllKursusController, createKursusController, editKursusController, getKursusByIdController } = require('./kursus.controller')
const router = express.Router()
const upload = require('../../middleware/multer_config')

router.post('/create', upload.single('mkursus_thumbnail'), createKursusController)
router.get("/list", getAllKursusController);
router.get("/detail/:idKursus", getKursusByIdController);
router.put("/update/:idKursus", editKursusController)

module.exports = router;