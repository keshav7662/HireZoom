const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const auth = require('./routes/auth.js')
require('dotenv').config()

const app = express();

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('Welcome to HireZoom')
})
app.use('/api',auth)

const RegisteredUsers = mongoose.model('RegisteredUsers', {
    fullName:String,
    email:String,
    mobile:String,
    password:String
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
