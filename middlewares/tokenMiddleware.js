const jwt = require('jsonwebtoken');
const SECRET_KEY = 'RANDOM_TOKEN_SECRET_FROM_GULLU'
const tokenMiddleware = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decodedToken = jwt.verify(token,SECRET_KEY);
        const userId = decodedToken.userId;
        if (!userId) {
            error: res.json('Invalid token!');
        } else {
            req.userObjectID = userId;
            console.log(req.userObjectID)
            next();
        }
    } catch {
        res.status(401).json({
            error: 'Invalid request!'
        });
    }
};

module.exports = tokenMiddleware