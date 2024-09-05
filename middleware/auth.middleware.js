
const UserModel = require("../models/user.model")
const jwt = require("jsonwebtoken")
// const ProductMiddleware = async (req, res, next) => {
//     const token = req.headers.authorization.split(' ')[1];

//     try {
//         if (!token) {
//             return res.send({ "message": "token not found" })
//         }
//         jwt.verify(token, process.env.secreteKey, async (err, verified) => {
//             if (err) {
//                 return res.sendStatus(403)
//             }
//             const user = await UserModel.findById({ _id: verified.id })
//             console.log("middleware data", user)
//             req.user = user

//             if (["admin", "seller"].includes(user.role)) {

//                 next()
//             } else {
//                 res.send({ "message": "you are not authorized" })
//             }
//         })
//     } catch (error) {

//     }
// }


const AuthMiddleware = async (req, res, next) => {

    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).send({ "message": "Token not found or invalid format" });
    }

    // Extract the token
    const token = authHeader.split(' ')[1];

    try {

        jwt.verify(token, process.env.secreteKey, async (err, verified) => {
            if (err) {
                return res.sendStatus(403);
            }


            const user = await UserModel.findById(verified.id);

            if (!user) {
                return res.status(404).send({ "message": "User not found" });
            }


            req.user = user;

            // Check user role
            if (["admin", "seller", "user"].includes(user.role)) {
                next();
            } else {
                res.status(403).send({ "message": "You are not authorized" });
            }
        });
    } catch (error) {
        console.error('Error in ProductMiddleware:', error);
        res.status(500).send({ "message": "Internal server error" });
    }
};




module.exports = AuthMiddleware