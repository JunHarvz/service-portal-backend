import express from 'express';
import { usernames } from '../controllers/usernamesController.js';

const router = express.Router();

router.get('/check-username', usernames)

export default router