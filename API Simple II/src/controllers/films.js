import { v4 as uuidv4 } from 'uuid';

let films = [
    { 
        id: uuidv4(), 
        favoriteMovie: "Inception", 
        genre: "Sci-Fi" 
    },
    { 
        id: uuidv4(), 
        favoriteMovie: "La La Land", 
        genre: "Romance" 
    }
];

export const getFilms = (req, res) => {
    res.send(films);
};

export const getFilmById = (req, res) => {
    const {id} = req.params;
    const film = films.find(f => f.id === id);

    if (!film) {
        return res.status(404).send('Film not found.');
    }

    res.send(film);
};

export const createFilm = (req, res) => {
    const film = {id: uuidv4(), ...req.body};
    films.push(film);
    res.send(`Film with the name ${film.favoriteMovie} added to the film list`);
};

export const deleteFilm = (req, res) => {
    const {id} = req.params;
    const filmIndex = films.findIndex(f => f.id === id);

    if (filmIndex === -1) {
        return res.status(404).send('Film not found.');
    }

    films.splice(filmIndex, 1);
    res.send(`Film with the id ${id} deleted from the film list`);
};

export const updatedFilm = (req, res) => {
    const {id} = req.params;
    const {favoriteMovie, genre} = req.body;
    const film = films.find(f => f.id === id);

    if (!film) {
        return res.status(404).send('Film not found.');
    }

    if (favoriteMovie) film.favoriteMovie = favoriteMovie;
    if (genre) film.genre = genre;
    res.send(`Film with the id ${id} updated`);

};