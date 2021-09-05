const jwt =require('jsonwebtoken')
const secret = 'naturey'


const withAuth = (req,res,next) => {
    const token = 
    req.query.token ||
    req.body.token ||
    req.cookies.token;
    console.log('req.body.token',req.body.token);
    if (!token) {
        res.status(401).send('unauthorized: no token provided')
    } else{
        jwt.verify(token, secret, function(err, decoded){
            if (err) {
                res.status(401).send('Unauthorized: invalid token')
            }else{
                console.log(decoded.email);
                next();
            }
        })
    }
}

module.exports = {
    withAuth
}