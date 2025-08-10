import { getRoles } from "../models/rolesModel.js";

export const roles = async (req, res) => {
    try {
        const roles = await getRoles();
        res.status(200).json(roles)
    } catch (error) {
        console.error('Error fetching data:',err);
        res.status(500).json({ message: 'Internal Service Error'});
    }
}