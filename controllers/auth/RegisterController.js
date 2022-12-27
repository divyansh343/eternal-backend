const {
    User
} = require("../../models/userModels");
const SECRET_KEY = 'RANDOM_TOKEN_SECRET_FROM_GULLU'
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const registerController = async (req, res) => {
    await bcrypt.hash(req.body.password, 10).then(
        (hash) => {
            const user = new User({
                name: req.body.name,
                email: req.body.email,
                password: hash,
            });
            user.save().then(
                (user) => {
                    const token = jwt.sign({
                            user_id: user._id,
                        },
                        SECRET_KEY, {
                            expiresIn: "24h",
                        }
                    );
                    res.status(201).json({
                        message: 'User Created successfully!',
                        sucess: true,
                        token: token,
                        user: {
                            name: user.name,
                            email: user.email,
                        }
                    });
                }
            ).catch(
                (error) => {
                    res.status(500).json({
                        sucess: false,
                        statusCode: 500,
                        message: error._message,
                        error: {
                            error: error.name,
                            message: error._message,
                            description: error.message
                        }
                    });
                }
            );
        }
    );
}

module.exports = {
    registerController
}