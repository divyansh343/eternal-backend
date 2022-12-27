const {
    User
} = require("../../models/userModels");
const bcrypt = require('bcrypt');
const profileController = (req, res, next) => {
    const influ = {
        name: req.body.name,
    };
    User.updateOne({
        _id: req.userObjectID
    }, influ).then(
        (response) => {
            res.status(201).json({
                status: 200,
                sucess: true,
                message: `name updated sucessfully to ${req.body.name}`,
                name: req.body.name
            });
        }
    ).catch(
        (error) => {
            res.status(400).json({
                status: 400,
                sucess: false,
                error: error
            });
            console.log(error);
        }
    );
}

const passController = async (req, res, next) => {
    await bcrypt.hash(req.body.password, 10).then(
        (hash) => {

            const influ = {
                password: hash
            };

            User.updateOne({
                _id: req.userObjectID
            }, influ).then(
                (response) => {
                    res.status(201).json({
                        status: 200,
                        sucess: true,
                        message: "password updated sucessfully",
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
                        }
                    });
                }
            );
        }
    );


}

const detailsController = (req, res) => {
    User.find({
        _id: req.userObjectID
    }).then(
        (response) => {
            res.status(200).json(response);
        }
    ).catch(
        (error) => {
            res.status(404).json({
                error: error
            });
        }
    );
}
module.exports = {
    profileController,
    passController,
    detailsController
}


