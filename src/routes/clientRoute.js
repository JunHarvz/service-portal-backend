import express from 'express';
import { clients } from '../controllers/clientController.js';

const router = express.Router();

router.get('/clients', clients)

export default router