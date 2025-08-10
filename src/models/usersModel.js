import {query} from '../db.js';

export const getUsersList = async () => {

    const result = await query(`SELECT us.id, 
                                        us.first_name, 
                                        us.last_name, 
                                        loc.location, 
                                        ro.role_name,
                                        us.role_id,
                                        us.location_id 
                                    FROM users us
                                    LEFT JOIN location loc ON us.location_id = loc.id
                                    LEFT JOIN roles ro ON us.role_id = ro.id
                                    ORDER BY us.first_name`);
    return (result);
}

export const updateUser = async (first_name, last_name, role_id, location_id, userId) => {

    const result = await query(`UPDATE users 
                                SET first_name = $1,
                                    last_name = $2,
                                    role_id = $3,
                                    location_id = $4
                                WHERE id = $5`, [first_name, last_name, role_id, location_id, userId]);
    return result;
}