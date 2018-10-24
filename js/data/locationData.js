import {setLocations, getLocations, locationsBuilder} from '../comp/locationComp.js';

function getLocation(movieList) {
    return new Promise(function(resolve, reject) {
    $.get('../../db/locations.json')
        .done((data) => {
            
            resolve();

        })
        .fail((error) => {
            reject(error);
        })
    })
} 

export {getLocation};


locationsBuilder(getLocations());  