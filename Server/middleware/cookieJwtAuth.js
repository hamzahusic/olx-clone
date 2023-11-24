const jwt = require("jsonwebtoken")

const validateJWToken = async (req,res,next) => {
    let token = req.headers.Authorization || req.headers.authorization;
    
    token = token.split(' ')[1];

    if(token){
        jwt.verify(token,process.env.JWT_KEY,(err,decoded) => {
            if(err){
                return res.status(401).send({response : "User not authorized"})
            }
           res.user = decoded;
           next();
        })
    }

}

module.exports = validateJWToken