import {setMovies} from '../js/comp/movieComp.js';
import {setLocations} from '../js/comp/locationComp.js';
import {searchEvent, timeOfDayEvent} from './event.js';

function init() {
    setMovies();
    setLocations();
    searchEvent();
    timeOfDayEvent();
}

init();