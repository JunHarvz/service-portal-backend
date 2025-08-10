import {query} from '../db.js';

export const getRoles = async () => {
    
    const roles = await query(`SELECT * FROM roles`);
    return roles;
}