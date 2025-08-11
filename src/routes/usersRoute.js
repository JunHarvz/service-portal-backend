import express from 'express'
import * as usersController from '../controllers/usersController.js'

const router = express.Router();

router.get('/users', usersController.getUsers);
router.get('./users', usersController.countUsers);
router.put('/users/:id', usersController.updateUser);
router.delete('/users/:id', usersController.deleteUser);

export default router