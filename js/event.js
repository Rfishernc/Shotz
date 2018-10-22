import {getLocations, locationsBuilder} from './comp/locationComp.js';

function searchEvent() {
    $('#input').keypress(function() {
        $('.card').show();
        let input = $('#input').val() + event.key;
        $('.card').filter(function() {
            if($(this).find('.locName').text().includes(input) || $(this).find('.locAddress').text().includes(input) != true ) {
                return this;
            }
        }).hide();
    })
}

function timeOfDayEvent() {
    $('.timeButton').click(function() {
        $('.card').show();
        let clicked = event.target.id;
        $('.card').filter(function() {
             if(this.classList.contains(clicked) != true) {
                 return this;
             }
        }).hide();
    })
}

export {searchEvent, timeOfDayEvent};