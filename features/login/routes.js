const express = require('express')

const router = express.Router();

const {handleLogin} = require('./controller')
const {sendMailToOwner}  = require("../middleware/nodeMailer")

router.post('/login', sendMailToOwner, handleLogin)

module.exports = router;