import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { findUserByUsername, createUser } from '../models/userModel.js';

const generateToken = (user) => {
    return jwt.sign(
        { id: user.id, 
          username: user.username, 
          fullname : user.fullname,
          role: user.role_name,
          location: user.location,
          location_code : user.location_code
          },
        process.env.JWT_SECRET,
        { expiresIn: '1h' }
    );
    
};
    
export const login = async (req, res) => {
    const {username, password} = req.body;
    const user = await findUserByUsername(username);
    if(!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(401).json({ message: 'Invalid Credentials'});
    }else{
        
    }
    
    res.json({token: generateToken(user)})
};

export const register = async (req, res) => {

    
    const { user, pwd, email, firstName, lastName, role, location} = req.body;
    
    const hashed = await bcrypt.hash(pwd, 10);
    const newUser = await createUser(user, hashed, email, firstName, lastName, role, location);

    res.status(201).json(newUser[0]);
}