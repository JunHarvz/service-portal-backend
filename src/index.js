import express from 'express';
import cors from 'cors';
import ticketRoutes from './routes/ticketRoute.js'

const app = express();
const PORT = process.env.PORT || 3000;
const allowedOrigins = [
  'http://localhost:5173',
  'https://service-portal-yffa.vercel.app'
];

app.use(cors({
  origin: allowedOrigins
}));
app.use(express.json());

app.use('/api', ticketRoutes);

app.get('/', (req, res) => {
    res.send('Hello');
})

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));