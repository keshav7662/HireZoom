const express = require('express')
const verifiedUser = require('../middlewares/userVerification')

const router = express.Router()

router.get('/home', verifiedUser, (req, res) => {
    res.json({
        success: true,
        message: 'Home Page!'
    })
})

module.exports = router;