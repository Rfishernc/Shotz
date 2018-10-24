let movies = [];

function setMovies(data) {
    movies = data;
}

function getMovies() {
    return movies;
}

function movieBuilder(movies) {
    let domString = '';
    for(let i = 0; i < movies.length; i++) {
        domString += `<div class="jumbotron movies col-4">`
        domString +=    `<h3>${movies[i].name}</h3>`
        domString +=    `<p class="lead">${movies[i].description}</p>`
        domString +=    `<hr class="my-4">`
        domString +=    `<p>${movies[i].genre} ${movies[i].release}</p>`
        domString += `</div>`
    }
    $('#moviePrintDiv').append(domString);
}

export {setMovies, getMovies, movieBuilder};