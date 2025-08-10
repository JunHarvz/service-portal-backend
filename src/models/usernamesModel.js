import {query} from '../db.js';

export const checkUsername = async (username) => {
    
    const usernames = await query(`SELECT username FROM users WHERE username = $1`, [username]);
    return usernames;
}
