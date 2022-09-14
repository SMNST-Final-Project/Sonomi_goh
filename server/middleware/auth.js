import jwt from "jsonwebtoken";
import User from "../models/User.js";

export const verifyToken = async (req, res, next) => {
    let token; 
    if (req.headers.authorization && req.headers.authorization.split(' ')[0] === "Bearer")
    
    token = req.headers.authorization.split(' ')[1]; 

    if (!token) return res.status(401).json({ message: 'A token is required for authentication' })
    
    try {

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const { id, isAdmin } = await User.findById(decoded); 
        
        req.user = { id, isAdmin }; 
        next(); 

    } catch (error) {
        console.log(error);
        res.status(401).json({ message: 'Invalid token' }); 
    }

}; 

