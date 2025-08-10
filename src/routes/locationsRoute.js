import express from 'express';
import { locations } from '../controllers/locationsController.js'

const router = express.Router();

router.get('/locations', locations)

export default router