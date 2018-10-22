import {setMovies, getMovies, movieBuilder} from '../comp/movieComp.js';

function getMovie() {
    $.get('../../db/movie.json')
        .done((data) => {
            setMovies(data.movies);
            movieBuilder(getMovies());    
        })
        .fail((error) => {
            console.error(error);
        });  
}

export {getMovie};