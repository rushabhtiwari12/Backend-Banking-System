const userModel = require("../model/user.model");
const jwt  = require("jsonwebtoken");

async function authMiddleware(req, res, next){
    const token = req.cookies?.token || req.headers.authorization?.split(" ")[1];
    console.log(token)
    if(!token){
        return res.status(401).json({
            message:"Unauthorized access, token is missing"
        })
    }
    try{

        const decode = jwt.verify(token, process.env.JWT_SECRET_KEY)

        const user = await userModel.findById(decode.userId)

        req.user = user

        return next()

    }catch(err){
        return res.status(401).json({
            message:"Unauthorized access, token is invalid", err
        })
    }
}
module.exports = {
    authMiddleware
}