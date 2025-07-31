import { query  } from "../db.js";

export const getTickets = async () => {
    const result = await query('SELECT * FROM tickets ORDER BY id');
    console.log('Query result:', result); // See what’s actually returned
    return result;
}

export const addTicket = async (ticketData) => {
    const {ticket_no, technician, status, client_id, client_name} = ticketData;
    const result = await query(`INSERT INTO tickets (ticket_no, technician, status, client_id, client_name) 
                                VALUES ($1, $2, $3, $4, $5) RETURNING *`,
                            [ticket_no, technician, status, client_id,client_name]);
    return result[0];
}

export const updateTicketStatus = async (ticketData, id) => {
    const {status} = ticketData;
    const result = await query(`UPDATE tickets SET status = $1 
                                WHERE id = $2 RETURNING *`,
                            [status, id]);
    return result[0];
}

export const deleteTicket = async (id) => {
    const { rowCount } = await query (`DELETE FROM tickets WHERE id = $1`, [id]);
    return  rowCount > 0;
}

export const searchTicket = async (searchTerm) => {
    const pattern = `'%${searchTerm}%'`
    const sql = `SELECT * FROM tickets 
                    WHERE technician ILIKE '%${searchTerm}%' OR
                    ticket_no ILIKE '%${searchTerm}%' OR
                    client_name ILIKE '%${searchTerm}%' OR
                    status ILIKE '%${searchTerm}%'`
    console.log(sql);
    const rows  = await query (sql);
    return rows;
}