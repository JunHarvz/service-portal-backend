import { getLocations } from "../models/locationsModel.js";

export const locations = async (req, res) => {
    try {
        const locations = await getLocations();
        res.status(200).json(locations);
    } catch (error) {
        console.error('Error fetching data:',err);
        res.status(500).json({ message: 'Internal Service Error'});
    }
}