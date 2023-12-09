const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
require('dotenv').config()

const app = express();

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('Welcome to HireZoom')
})

app.listen(process.env.PORT, () => {
    mongoose.connect(process.env.MONGO_URL)
        .then(() => {
            console.log(`server running successfully on ${process.env.PORT}`)
        })
        .catch((error) => {
            console.log(error)
        })
})