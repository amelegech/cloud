const jwt =require('jsonwebtoken');
const config =require('config');

module.exports = function(req, res,next){
    //we have to GET the tocken from the header
    const token = req.header('x-auth-token');// header for the tocken come from  front end

    //check if it is no token
    if(!token){
        return res.status(400).json({msg:'no token,authorization denied'});

    }
    try {
        const decoded = jwt.verify(token,config.get('jwtSecret'));
        req.user = decoded.user
        next();
    } catch (err) {
        res.status(401).json({msg:'Token is not valid'})
    }
}