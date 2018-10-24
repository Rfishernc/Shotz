function getMovie() {
    return new Promise(function(resolve, reject) {
        $.get('../../db/movie.json')
            .done((data) => {
                resolve(data.movies);
            })
            .fail((error) => {
                reject(error);
            })
        })
    } 

export {getMovie};