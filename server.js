const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const auth = require('./routes/auth.js')
const jobSeeker = require('./routes/jobseeker.js')
require('dotenv').config()

const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('Welcome to HireZoom')
})
app.get('/health', (req, res) => {
    res.json({
        serverName: 'WeekList Server',
        currentTime: new Date(),
        state: 'active',
    })
})

app.use('/api', auth)
app.use('/api', jobSeeker)


app.use((req, res, next) => {
    res.status(404).json({ message: 'Route not found' });
});
app.listen(process.env.PORT, () => {
    mongoose.connect(process.env.MONGO_URL)
        .then(() => {
            console.log(`server running successfully on ${process.env.PORT}`)
        })
        .catch((error) => {
            console.log(error)
        })
})
