import express from 'express';

import * as ticketController from '../controllers/ticketController.js'

const router = express.Router();

router.get('/tickets', ticketController.getTickets);
router.post('/tickets', ticketController.addTicket);
router.put('/tickets/:id', ticketController.updateTicketStatus);
router.delete('/tickets/:id', ticketController.deleteTicket);
router.get('/tickets/search', ticketController.searchTicket);

export default router;