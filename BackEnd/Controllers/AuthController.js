import UserModel, { findOne, find } from "../Models/user";
import { hash, compare } from 'bcrypt';
import { sign } from "jsonwebtoken";

const signup=async(req,res)=>{
    try{
        const {name,email,password}=req.body;
        const user = await findOne({email});
        if(user){
            return res.status(409)
            .json({message:'User is already exist, you can login',success:false});
        }

        const userModel=new UserModel({name,email,password});
        userModel.password=await hash(password,10);
        await userModel.save();
        res.status(201)
            .json({
                message:"Signup Successfully",
                success:true
            })
    
    }catch(err){
        res.status(500)
            .json({
                message:"Internal server error.",
                success:false
            })
    }
}


const login = async (req, res) => {
    try {
      const { email, password } = req.body;
  
      // Find the user by email
      const user = await UserModel.findOne({ email });
      if (!user) {
        return res.status(400).json({ message: "User not found", success: false });
      }
  
      // Compare the entered password with the stored hashed password
      const isPasswordValid = await compare(password, user.password);
      if (!isPasswordValid) {
        return res.status(400).json({ message: "Invalid credentials", success: false });
      }
  
      // Create a JWT token
      const jwtToken = sign(
        { id: user._id, email: user.email },
        process.env.JWT_SECRET,
        { expiresIn: "24h" }
      );
  
      res.status(200).json({
        message: "Login successful",
        success: true,
        jwtToken,
        user: {
          name: user.name,
          email: user.email,
        },
      });
    } catch (err) {
      res.status(500).json({ message: "Internal server error", success: false });
    }
  };
const getAllUsers = async (req, res) => {
    try {
      console.log("Fetching users...");
      const users = await UserModel.find();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching users', error });
    }
  };

export default{
    signup,
    login,
    getAllUsers
}