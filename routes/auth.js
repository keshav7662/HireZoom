const express = require('express')
const router = express.Router();

router.get('/health',(req,res) => {
    res.json({
        serverName: 'WeekList Server',
        currentTime: new Date(),
        state: 'active',
    })
})


module.exports = router;