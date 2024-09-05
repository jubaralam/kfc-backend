const express = require("express")
const userRouter = express.Router()

const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const UserModel = require("../models/user.model")


// user route for registering
userRouter.post("/register", async (req, res) => {
    const { name, email, password } = req.body

    try {
        const user = await UserModel.findOne({ email })
        if (!user) {
            bcrypt.hash(password, 5, async (err, hash) => {
                if (err) {
                    res.send({ "message": "something went wrong while hashing password", "error": err.message })
                }
                else {
                    const user = UserModel({ name, email, password: hash })
                    await user.save()
                    res.send({ "message": "you have registered successfully" })
                }
            })
        } else {
            res.send({ "message": "you have already registered" })
        }

    } catch (error) {
        res.send({ "error": error.message })

    }
})


// user route for log in 

userRouter.post("/login", async (req, res) => {
    const { email, password } = req.body
    console.log(email, password)
    try {
        const user = await UserModel.findOne({ email })
        if (!user) {
            return res.status(500).send({ "message": "wrong creditial" })
        }

        bcrypt.compare(password, user.password, async (err, decoded) => {
            if (err) {
                return res.status(500).send({ "message": "server error ", "error": err.message })
            }

            if (!decoded) {
                return res.status(500).send({ "message": "wrong creditial" })

            }



            const token = jwt.sign({ id: user._id }, process.env.secreteKey)

            return res.status(200).send({ "message": "you have logged in Succefully", "token": token, user: user })

        })




    } catch (error) {
        res.status(500).send({ "error": error.message })

    }
})


// Update user information
userRouter.patch("/update/:user_id", async (req, res) => {
    const { user_id } = req.params;
    const { name, email, password } = req.body;

    try {
        let updateData = { name, email };

        // If the password needs to be updated, hash it first
        if (password) {
            const hashedPassword = await bcrypt.hash(password, 5);
            updateData.password = hashedPassword;
        }

        const updatedUser = await UserModel.findByIdAndUpdate(
            user_id,
            updateData,
            { new: true }
        );

        if (!updatedUser) {
            return res.status(404).send({ "message": "User not found" });
        }

        res.status(200).send({ "message": "User information updated successfully", "data": updatedUser });
    } catch (error) {
        res.status(500).send({ "error": error.message });
    }
});


// Delete user account
userRouter.delete("/delete/:user_id", async (req, res) => {
    const { user_id } = req.params;

    try {
        const deletedUser = await UserModel.findByIdAndDelete(user_id);

        if (!deletedUser) {
            return res.status(404).send({ "message": "User not found" });
        }

        res.status(200).send({ "message": "User account deleted successfully" });
    } catch (error) {
        res.status(500).send({ "error": error.message });
    }
});





module.exports = userRouter