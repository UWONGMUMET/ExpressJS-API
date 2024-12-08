import express from 'express';
import bodyParser from 'body-parser';
import filmsRoutes from './routes/films.js';

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.use('/films', filmsRoutes);

app.get('/', (req, res) => {
    res.send('Welcome to my Express API!');
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
