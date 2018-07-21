var jwt = require('jsonwebtoken');

module.exports = {
    authenticate: function(req, res, next){
        var token = req.headers['authorization'];
        // decode token
        if (token) {
            // verifies secret
            jwt.verify(token, req.app.get('private-key'), function (err, decoded) {
                if (err) {
                    return res.status(401).json({success: false, message: 'Failed to authenticate token.'});
                } else {
                    // if everything is good, save to request for use in other routes
                    req.decoded = decoded;
                    decoded.username;
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
};