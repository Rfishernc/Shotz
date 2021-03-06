import {getMovie} from '../data/movieData.js';
import {movieEvent, backEvent} from '../event.js';

function setMovies(id) {
    getMovie(id).then(function(data) {
        movieBuilder(data);
        if(id !== undefined) {
            makeBackBtn();
        }
    })
}

function getMovies() {
    return movies;
}

function movieBuilder(movies) {
    $('#moviePrintDiv').html('');
    let domString = '';
    for(let i = 0; i < movies.length; i++) {
        domString += `<div class="jumbotron movies col-4 movieButton" id=${movies[i].id}>`
        domString +=    `<h3 id='${movies[i].name}' class='movieName'>${movies[i].name}</h3>`
        domString +=    `<p class="lead">${movies[i].description}</p>`
        domString +=    `<hr class="my-4">`
        domString +=    `<p>${movies[i].genre} ${movies[i].release}</p>`
        domString += `</div>`
    }
    $('#moviePrintDiv').append(domString);
    movieEvent();
}

function makeBackBtn() {
    let domString = '';
    domString += `<div>`
    domString +=    `<button type="button" class="btn btn-primary" id='backButton'>Back</button>`
    domString += `</div>`;
    $('#moviePrintDiv').append(domString);
    backEvent();
}

export {setMovies, getMovies, movieBuilder};