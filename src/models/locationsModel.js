import {query} from '../db.js';

export const getLocations = async () => {
    
    const locations = await query(`SELECT * FROM location`);
    return locations;
}