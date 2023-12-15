const jwt = require('jsonwebtoken')
const verifiedUser = (req,res,next) => {
    try{
        const {token} = req.headers
        const user = jwt.verify(token,process.env.JWT_SECRET)
        req.user = user;
        next();
    }catch(error) {
        res.json({
            status:'Authorization Failed!',
        })
    }
}
module.exports = verifiedUser;