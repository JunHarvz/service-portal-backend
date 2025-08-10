import express from 'express';
import { verifyToken } from '../middleware/authMiddleware.js';

import * as ticketController from '../controllers/ticketController.js'

const router = express.Router();

router.get('/tickets', ticketController.getTickets);
router.post('/tickets', ticketController.addTicket);
router.put('/tickets/:ticket_no', ticketController.updateTicketStatus);
router.delete('/tickets/:ticket_no', ticketController.deleteTicket);
router.get('/tickets/search', ticketController.searchTicket);

export default router;