const UserModel = require('../Models/user'); // Change import to require
const { hash, compare } = require('bcrypt');
const { sign } = require("jsonwebtoken");

const signup = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const user = await UserModel.findOne({ email });
        if (user) {
            return res.status(409)
                .json({ message: 'User already exists, you can login', success: false });
        }

        const userModel = new UserModel({ name, email, password });
        userModel.password = await hash(password, 10);
        await userModel.save();
        res.status(201)
            .json({
                message: "Signup Successful",
                success: true
            })

    } catch (err) {
        res.status(500)
            .json({
                message: "Internal server error.",
                success: false
            })
    }
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await UserModel.findOne({ email });
        const errorMsg = "Authentication failed, email or password is incorrect";
        if (!user) {
            return res.status(403)
                .json({ message: errorMsg, success: false });
        }
        const isPassEqual = await compare(password, user.password);
        if (!isPassEqual) {
            return res.status(403)
                .json({ message: errorMsg, success: false });
        }

        const jwtToken = sign(
            { email: user.email, _id: user._id },
            process.env.JWT_SECRET,
            { expiresIn: '24h' }
        );

        res.status(200)
            .json({
                message: "Login Successful",
                success: true,
                jwtToken,
                email,
                name: user.name
            })

    } catch (err) {
        res.status(500)
            .json({
                message: "Internal server error.",
                success: false
            })
    }
}

const getAllUsers = async (req, res) => {
    try {
        console.log("Fetching users...");
        const users = await UserModel.find(); // This fetches all users
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching users', error });
    }
}

module.exports = {
    signup,
    login,
    getAllUsers
}
