var jwt = require('jsonwebtoken');

function verifyToken(req, res, next){
    var token = req.body.token || req.query.token || req.headers['token'];
    // decode token
    if (token) {
        // verifies secret
        jwt.verify(token, req.app.get('private-key'), function (err, decoded) {
            if (err) {
                return res.status(401).json({success: false, message: 'Failed to authenticate token.'});
            } else {
                // if everything is good, save to request for use in other routes
                req.username = decoded.username;
                next();
            }
        });
    } else {
        // if there is no token
        // return an error
        return res.status(403).send({
            success: false,
            message: 'No token provided.'
        });
    }
}
module.exports = verifyToken
