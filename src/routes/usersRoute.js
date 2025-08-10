import express from 'express'
import * as usersController from '../controllers/usersController.js'

const router = express.Router();

router.get('/users', usersController.getUsers);
router.put('/users/:id', usersController.updateUser)

export default router