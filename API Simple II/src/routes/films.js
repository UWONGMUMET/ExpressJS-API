import express from 'express';
import { getFilms, getFilmById , createFilm, deleteFilm, updatedFilm} from '../controllers/films.js';

const router = express.Router();

router.get('/', getFilms);
router.get('/:id', getFilmById);
router.post('/', createFilm);
router.delete('/:id', deleteFilm);
router.put('/:id', updatedFilm);

export default router;
