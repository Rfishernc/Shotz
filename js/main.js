import {getMovie} from './data/movieData.js';
import {getLocation} from './data/locationData.js';
import {searchEvent, timeOfDayEvent} from './event.js';

function init() {
    getMovie();
    getLocation();
    searchEvent();
    timeOfDayEvent();
}

init();