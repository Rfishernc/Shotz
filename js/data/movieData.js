function getMovie(id) {
    return new Promise(function(resolve, reject) {
        $.get('../../db/movie.json')
            .done((data) => {
                if(id !== undefined) {
                    let filteredMovies = [];
                    for(let i = 0; i < data.movies.length; i++) {
                        if(data.movies[i].id == id) {
                            filteredMovies.push(data.movies[i]);
                            resolve(filteredMovies);
                            break;
                        }
                    }
                }
                else {
                    resolve(data.movies);}
            })
            .fail((error) => {
                reject(error);
            })
        })
    } 

export {getMovie};