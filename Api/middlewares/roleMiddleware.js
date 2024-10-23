const authorizeRoles = ( ...allowedRoles ) => {
    return (req, res, next) => {
        console.log(123);
        if(!allowedRoles.includes(req.user.role)){
            return res.status(401)
            .json({ message: "Access Denied."})
        }
        next()
    }
}

module.exports = authorizeRoles