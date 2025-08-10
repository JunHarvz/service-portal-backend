import { getTechnicians } from "../models/technicianModel.js";

export const technicians = async (req, res) => {
    try {
        const technicians = await getTechnicians();
        res.status(200).json(technicians)
    } catch (error) {
        console.error('Error fetching data:',err);
        res.status(500).json({ message: 'Internal Service Error'});
    }
    
}