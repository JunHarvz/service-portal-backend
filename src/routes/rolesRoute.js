import express from 'express';
import { roles } from '../controllers/rolesController.js'

const router = express.Router();

router.get('/roles', roles)

export default router