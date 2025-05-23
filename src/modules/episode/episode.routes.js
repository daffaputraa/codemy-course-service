const express = require('express')
const { createEpisodeController } = require('./episode.controller')
const router = express.Router()

router.post('/create', createEpisodeController)

module.exports = router;