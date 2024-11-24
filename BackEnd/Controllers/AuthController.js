// Controllers/AuthController.js
import UserModel from "../Models/user.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

// Signup handler
export const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if user already exists
    const user = await UserModel.findOne({ email });
    if (user) {
      return res.status(409).json({
        message: 'User already exists, you can login',
        success: false,
      });
    }

    // Create a new user
    const userModel = new UserModel({ name, email, password });

    // Hash the password before saving
    userModel.password = await bcrypt.hash(password, 10);
    await userModel.save();

    res.status(201).json({
      message: 'Signup Successful',
      success: true,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: 'Internal Server Error.',
      success: false,
    });
  }
};

// Login handler
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user by email
    const user = await UserModel.findOne({ email });
    const errorMsg = 'Authentication failed: email or password is wrong';

    if (!user) {
      return res.status(403).json({
        message: errorMsg,
        success: false,
      });
    }

    // Compare password
    const isPassEqual = await bcrypt.compare(password, user.password);
    if (!isPassEqual) {
      return res.status(403).json({
        message: errorMsg,
        success: false,
      });
    }

    // Generate JWT token
    const jwtToken = jwt.sign(
      { email: user.email, _id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: '24h' }
    );

    res.status(200).json({
      message: 'Login Successful',
      success: true,
      jwtToken,
      email,
      name: user.name,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: 'Internal Server Error.',
      success: false,
    });
  }
};

// Get all users handler
export const getAllUsers = async (req, res) => {
  try {
    // Fetch all users from the database
    const users = await UserModel.find();
    res.status(200).json(users); // Send users as a response
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: 'Error fetching users',
      error,
    });
  }
};
