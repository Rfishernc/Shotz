function getLocation(movieList) {
    return new Promise(function(resolve, reject) {
    $.get('../../db/locations.json')
        .done((data) => {
            for(let i = 0; i < data.locations.length; i++) {
                for(let j = 0; j < movieList.length; j++) {
                    if(movieList[j].locations.includes(data.locations[i].id)) {
                        data.locations[i].movies.push(movieList[j]);
                    }
                }
            }
            resolve(data);

        })
        .fail((error) => {
            reject(error);
        })
    })
} 

export {getLocation}; 