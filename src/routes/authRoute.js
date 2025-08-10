import express from 'express';
import { login, register } from '../controllers/authController.js';
import { verifyToken } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/login', login);
router.post('/register', register);

router.get('/profile', verifyToken, (req, res) => {
    res.json({ message : `Welcome, ${req.user.username}!`,
                fullname: req.user.fullname,
                user_role : req.user.role,
                location : req.user.location,
                location_code : req.user.location_code}
    );
})

export default router;