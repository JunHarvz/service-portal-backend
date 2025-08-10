import {query} from '../db.js';

export const getClientList = async () => {
    
    const clients = await query(`SELECT cli.id, cli.client_name, loc.location 
                                    FROM clients cli  
                                    LEFT JOIN location loc ON cli.location = loc.id`);
    return clients;
}
