const express = require('express')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const RegisteredUsers = require('../models/registeredUser')
const errorHandler = require('../Utils/ErrorHandler')
const router = express.Router();

//register
router.post('/register', async (req, res) => {
    try {
        const { fullName, email, mobile, password } = req.body
        if (!fullName || !email || !mobile || !password) {
            return res.status(400).json({
                error: 'All fields are mandatory!'
            })
        }
        const existingUser = await RegisteredUsers.findOne({ email })

        if (existingUser) {
            return res.status(409).json({
                error: 'Email already exits!'
            })
        }
        const encryptedPassword = await bcrypt.hash(password, 10)

        const user = new RegisteredUsers({ fullName, email, mobile, password: encryptedPassword })
        await user.save()

        res.status(200).json({
            message: 'User created  successsfully!',
            recruiterName: fullName,
            userId: email,
        })
    } catch (error) {
        errorHandler(res, error)
    }
})

//login
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body
        if (!email || !password) {
            return res.status(400).json({
                error: 'Email and password required!'
            })
        }

        const userFound = await RegisteredUsers.findOne({ email })
        if (!userFound) {
            return res.status(400).json({
                error: 'Invalid user!'
            })
        }

        const validPassword = await bcrypt.compare(password, userFound.password)
        if (!validPassword) {
            return res.status(400).json({
                error: 'Invalid password!'
            })
        }

        //generate jwt token
        const token = jwt.sign({ email: email, recruiterName: userFound.fullName }, process.env.JWT_SECRET)
        res.json({
            success: true,
            message: 'login successful!',
            recruiterName: userFound.fullName,
            token
        })
    } catch (error) {
        errorHandler(res, error)
    }
})

module.exports = router;