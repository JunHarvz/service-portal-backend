import express from 'express';
import cors from 'cors';
import ticketRoutes from './routes/ticketRoute.js';
import router from './routes/authRoute.js';
import clientRoutes from './routes/clientRoute.js'
import technicianRoutes from './routes/technicianRoute.js';
import usersRoutes from './routes/usersRoute.js';
import rolesRoutes from './routes/rolesRoute.js';
import locationsRoutes from './routes/locationsRoute.js';
import usernamesRoutes  from './routes/usernamesRoute.js';
import { verifyToken } from './middleware/authMiddleware.js';

const app = express();
const PORT = process.env.PORT || 8080;
const allowedOrigins = [
  'http://localhost:5173',
  'https://service-portal-delta.vercel.app'
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
}));
app.use(express.json());
app.use('/api', router);
app.use('/api/profile', verifyToken); //Protected route
app.use('/api', ticketRoutes);
app.use('/api', clientRoutes);
app.use('/api', technicianRoutes);
app.use('/api', usersRoutes);
app.use('/api', rolesRoutes);
app.use('/api', locationsRoutes);
app.use('/api', usernamesRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
