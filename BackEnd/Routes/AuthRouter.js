import { signup, login, getAllUsers } from '../Controllers/AuthController';
import { signupValidation, loginValidation } from '../Middlewares/AuthValidation';

const router=require('express').Router();

router.post('/signup',signupValidation,signup);
router.post('/login',loginValidation,login);
router.get('/users', getAllUsers);

export default router;