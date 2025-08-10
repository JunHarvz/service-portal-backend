import { getClientList } from "../models/clientModel.js";

export const clients = async (req, res) => {
    try {
        const clients = await getClientList();
        res.status(200).json(clients)
    } catch (error) {
        console.error('Error fetching data:',err);
        res.status(500).json({ message: 'Internal Service Error'});
    }
    
}