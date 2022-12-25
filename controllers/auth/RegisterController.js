const { User } = require("../../models/userModels");
const bcrypt = require('bcrypt');
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
                    res.status(201).json({
                        message: 'User Created successfully!',
                        sucess:true,
                        token:user._id,
                        user: {
                            name : user.name,
                            email : user.email,
                        }
                    });
                }
            ).catch(
                (error) => {
                    res.status(500).json({
                        sucess:false,
                        statusCode:500,
                        message:error._message,
                        error: {
                            error:error.name,
                            message:error._message,
                            description:error.message
                        }
                    });
                }
            );
        }
    );
}

module.exports = { registerController }