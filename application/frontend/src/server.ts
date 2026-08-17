import express from 'express';
import path from 'path';

const app = express();

const PORT = 3001;

app.use(express.json());

app.use(express.static(path.resolve(__dirname, '../public')));

app.get('/health', (_req, res) => {
    res.json({
        status: 'UP'
    });
});

app.listen(PORT, () => {
    console.log(`Kriwex frontend running on http://localhost:${PORT}`);
});