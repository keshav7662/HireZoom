const jwt = require('jsonwebtoken')
const verifiedUser = (req, res, next) => {
    try {
        const Authorization = req.headers['authorization']
        const user = jwt.verify(Authorization, process.env.JWT_SECRET)
        req.user = user;
        next();
    } catch (error) {
        res.json({
            status: 'Authorization Failed!',
        })
    }
}
module.exports = verifiedUser;