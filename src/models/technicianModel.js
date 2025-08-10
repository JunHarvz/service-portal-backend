import {query} from '../db.js';

export const getTechnicians = async () => {
    
    const technicians = await query(`SELECT id, CONCAT(first_name, ' ', last_name) as technician FROM users WHERE role_id = 3 ORDER BY first_name`);
    return technicians;
}
