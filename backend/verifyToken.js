//if user tries to delete or update the account they have to go through this verify token middleware

const jwt = require('jsonwebtoken')

const verifyToken = (req,res,next)=>{
    const token = req.cookies.token //value of the token
    if(!token){
        return res.status(401).json("You are not authorized to access this resource.")
    }
    jwt.verify(token,process.env.SECRET, async(err,data) => {
        if(err){
            return res.status(403).json("You are not authorized to access this resource.")
        }
        req.userId=data.id
        console.log("passed");
        next()
    })
}

module.exports = verifyToken