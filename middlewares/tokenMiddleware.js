const jwt = require('jsonwebtoken');
const SECRET_KEY = 'RANDOM_TOKEN_SECRET_FROM_GULLU'
const tokenMiddleware = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decodedToken = jwt.verify(token,SECRET_KEY);
        const userId = decodedToken.userId;
        if (req.body.userId && req.body.userId !== userId) {
            error: res.json('Invalid token!');
        } else {
            req.userObjectID = userId;
            next();
        }
    } catch {
        res.status(401).json({
            error: 'Invalid request without token!'
        });
    }
};

module.exports = tokenMiddleware