import {query} from '../db.js';

export const findUserByUsername = async (username) => {
    
    const users = await query(`SELECT 
                                us.id, 
                                us.username, 
                                us.password, 
                                CONCAT(us.first_name, ' ', us.last_name) as fullname, 
                                ro.role_name,
                                loc.location,
                                loc.location_code
                                FROM users us 
                                LEFT JOIN roles ro ON us.role_id = ro.id
                                LEFT JOIN location loc ON us.location_id = loc.id
                                WHERE username = $1`, [username]);
    return users[0];
}

export const createUser = async (user, hashed, email, firstName, lastName, role, location) => {
    const newUser =  await query(`INSERT INTO users (username, password, first_name, last_name, email, role_id, location_id) 
                        VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *`, [user, hashed, firstName, lastName, email, role, location]);
    return newUser[0];
}