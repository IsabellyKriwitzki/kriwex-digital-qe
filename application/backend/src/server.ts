import express from 'express';
import cors from 'cors';

import authRoutes from './routes/authRoutes';

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.get('/api/health', (_req, res) => {
    res.status(200).json({
        status: 'UP',
        service: 'Kriwex Digital API'
    });
});

app.use('/api/auth', authRoutes);

app.listen(PORT, () => {
    console.log(
        `Kriwex Digital API running on http://localhost:${PORT}`
    );
});