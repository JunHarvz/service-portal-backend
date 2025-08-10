import { query  } from "../db.js";

export const getTickets = async () => {
        const result = await query(`SELECT tic.id, 
                                        tic.description,
                                        tic.ticket_no, 
                                        cl.client_name, 
                                        CONCAT(us.first_name,' ', us.last_name) AS technician,
                                        sl.status_name
                                FROM tickets tic
                                LEFT JOIN clients cl ON tic.client_id = cl.id
                                LEFT JOIN users us ON tic.technician_id = us.id
                                LEFT JOIN status_list sl ON tic.status = sl.id
                                ORDER BY tic.id DESC;`);
    console.log('Query result:', result); // See what’s actually returned
    return result;
}

export const addTicket = async (ticketData) => {
    const {ticket_no, technician, clientId, description} = ticketData;
    const result = await query(`INSERT INTO tickets (ticket_no, technician_id, client_id, description) 
                                VALUES ($1, $2, $3, $4) RETURNING *`,
                            [ticket_no, technician, clientId, description]);
    return result[0];
}

export const updateTicketStatus = async (ticketData, ticket_no) => {
    const result = await query(`UPDATE tickets SET status = $1 
                                WHERE ticket_no = $2 RETURNING *`,
                            [ticketData, ticket_no]);
    return result[0];
}

export const deleteTicket = async (ticket_no) => {
    const { rowCount } = await query (`DELETE FROM tickets WHERE ticket_no = $1`, [ticket_no]);
    return  rowCount > 0;
}

export const searchTicket = async (searchTerm) => {
    const pattern = `'%${searchTerm}%'`
    const sql = `SELECT * FROM tickets 
                    WHERE technician ILIKE '%${searchTerm}%' OR
                    ticket_no ILIKE '%${searchTerm}%' OR
                    client_name ILIKE '%${searchTerm}%' OR
                    status ILIKE '%${searchTerm}%'`
    const rows  = await query (sql);
    return rows;
}