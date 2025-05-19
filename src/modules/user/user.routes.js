const { getAllUser } = require('./user.controller')
const express = require('express')
const router = express.Router()

router.get('/list', getAllUser)

module.exports = router;
