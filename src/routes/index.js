const userRoute = require('../modules/user/user.routes')
const express = require('express')
const router = express.Router()

router.use('/users', userRoute)

module.exports = router
