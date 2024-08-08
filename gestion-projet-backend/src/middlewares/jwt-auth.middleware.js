const jwt = require('jsonwebtoken');

// JWT middleware
// allowedUser: tableau de nom de compte authoriser en lowercase
const jwtAuth = (allowedUser = ["admin"]) => {
    return async (req, res, next) => {
        try {
            // Lecture d'headers
            var bearerHeader = req.headers['authorization'];
            if (typeof bearerHeader !== 'undefined') {
                var bearer = bearerHeader.split(" ");
                bearerToken = bearer[1];

                // Verification
                // Salt: process.env.JWT_KEY
                var user = jwt.verify(bearerToken, process.env.JWT_KEY);
                req.user = user;

                if( !allowedUser.includes(user.UserRole.name.toLowerCase())) throw new Error(`Accès pour ${allowedUser} seulement`);
            } else {
                throw new Error("Authentification echoué.");
            }
            next();
        } catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    }
}

module.exports = jwtAuth;