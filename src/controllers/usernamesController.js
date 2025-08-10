import { checkUsername } from "../models/usernamesModel.js";

export const usernames = async (req, res) => {
    const user = req.query.username;
    
    if(!user){
        return res.status(404).json({ message: 'Username is required' });
    }
    try {
        const result = await checkUsername(user);
        res.json({ exists: result.length > 0 });

    } catch (error) {
        console.error('Error fetching data:',error);
        res.status(500).json({ message: 'Internal Service Error'});
    }
    
}