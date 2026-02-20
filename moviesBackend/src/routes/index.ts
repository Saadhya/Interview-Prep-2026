import { Router } from 'express';
import { getAllGenres, getMovies, getMoviesByGenre, searchMovie } from '../controllers/movie.controller';

const router = Router();

router.get('/movies', getMovies);
router.get('/movies/search', searchMovie);
router.get('/movies/genre', getMoviesByGenre);
router.get('/movies/getAllGenres', getAllGenres);

// Add more routes here, e.g., router.use('/users', usersRouter)

export default router;