import * as ticketService from '../services/ticketServices.js'

export const getTickets = async (req, res) => {
    try {
        const tickets = await ticketService.getTickets();
        res.status(200).json(tickets)
    } catch (err) {
        console.error('Error fetching data:',err);
        res.status(500).json({ message: 'Internal Service Error'});
    }
};

export const addTicket = async (req, res) => {
    try {  
        const ticketData = req.body;
        const newTicket = await ticketService.addTicket(ticketData);
        res.status(200).json(newTicket)
    } catch (err) {
        console.error('Error adding data:', err);
        res.status(500).json({ message: 'Internal Service Error'});
    }
};

export const updateTicketStatus = async (req, res) => {
    try {
        const ticketData = req.body.status;
        const ticket_no = req.params.ticket_no

        const updateTicketStatus = await ticketService.updateTicketStatus(ticketData, ticket_no);

        if (!updateTicketStatus) {
            return res.status(404).json({ message : "Data not found."})
        }else{
            res.status(200).json(updateTicketStatus)
        }
        
    } catch (err) {
        console.error('Error updating data:',err);
        res.status(500).json({ message: 'Internal Service Error'});
    }
};

export const deleteTicket = async (req, res) => {
    try {
        const ticket_no = req.params.ticket_no

        const deleteTicket = await ticketService.deleteTicket(ticket_no);
        
                res.status(200).json(deleteTicket)
            
    } catch (err) {
        console.error('Error deleting data:',err);
        res.status(500).json({ message: 'Internal Service Error'});
    }
};

export const searchTicket = async (req, res) => {
    try {
        const searchTerm = req.query.q;
        const tickets = await ticketService.searchTicket(searchTerm);
        res.status(200).json(tickets);
    } catch (err) {
        console.error('Error searching ticket', err.message, err.stack);
        res.status(500).json({ message : 'Internal Service Error'});
    }
}