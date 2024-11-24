// Routes/AuthRouter.js
import express from 'express';
import { signupValidation, loginValidation } from '../Middlewares/AuthValidation.js';
import { signup, login, getAllUsers } from '../Controllers/AuthController.js';

const router = express.Router();

// Signup route with validation middleware
router.post('/signup', signupValidation, signup);

// Login route with validation middleware
router.post('/login', loginValidation, login);

// Get all users route (no validation required here)
router.get('/users', getAllUsers);

export default router;
