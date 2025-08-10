import express from 'express';
import { technicians } from '../controllers/technicianController.js';

const router = express.Router();

router.get('/technicians', technicians)

export default router