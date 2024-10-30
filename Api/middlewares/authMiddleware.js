const jwt = require("jsonwebtoken")

const verifyToken = (req, res, next) => {
    console.log(req.headers);
     let token
     let authHeader = req.headers.Auth ||  req.headers.auth
     if(authHeader && authHeader.startsWith("Bearer")){
         token = authHeader.split(" ")[1]
         
         if(!token){
             return res.status(402)
             .json({ message: "No Token, Authorazation Denied."})
            }
            
            try{
                const decode = jwt.verify(token, process.env.JWT_CODE)
                req.user = decode
                console.log(" the Decoded User is: ", req.user);
                next()
            }
            catch(err){
                return res.status(400)
                .json({ message: "Token is not Valid."})
            }
     }else{
        return res.status(401)
            .json({ message: "No Token, Authorazation Denied."})
     }
}

module.exports = verifyToken