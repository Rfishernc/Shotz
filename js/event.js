import {getLocations, locationsBuilder} from './comp/locationComp.js';

function searchEvent() {
    $('#input').keypress(function() {

    })
}

function timeOfDayEvent() {
    $('.timeButton').click(function() {
        locationsBuilder(getLocations());
        let clicked = event.target.id;
        $('.card').filter(function(i) {
             if(this.classList.contains(clicked) != true) {
                 return this;
             }
        }).hide();
    })
}

export {searchEvent, timeOfDayEvent};