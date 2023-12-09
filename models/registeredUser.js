const mongoose = require('mongoose')
const RegisteredUsers = mongoose.model('RegisteredUsers', {
    fullName:String,
    email:String,
    mobile:String,
    password:String
})
module.exports = RegisteredUsers