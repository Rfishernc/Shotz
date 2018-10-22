import {setLocations, getLocations, locationsBuilder} from '../comp/locationComp.js';

function getLocation() {
    $.get('../../db/locations.json')
        .done((data) => {
            setLocations(data.locations);
            locationsBuilder(getLocations());    
        })
        .fail((error) => {
            console.error(error);
        });  
}

export {getLocation};