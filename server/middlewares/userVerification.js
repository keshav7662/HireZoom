const jwt = require('jsonwebtoken')
const RegisteredUsers = require('../models/registeredUser')
const verifiedUser = async (req, res, next) => {
    try {
        const Authorization = req.headers['authorization']
        const user = jwt.verify(Authorization, process.env.JWT_SECRET)
        const { userId } = user;
        const userExists = await RegisteredUsers.findById(userId);
        if (!userExists) {
            return res.status(401).json({
                error: 'User not found or has been deleted!',
            });
        }
        req.user = user;
        next();
    } catch (error) {
        res.json({
            error: 'Authorization Failed!',
        })
    }
}
module.exports = verifiedUser;