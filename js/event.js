import {getLocations, locationsBuilder} from './comp/locationComp.js';

function searchEvent() {
    $('#input').keyup(function() {
        $('.card').show();
        let input = $('#input').val();
        console.log(input);
        $('.card').filter(function() {
            if($(this).find('.locName').text().includes(input) != true && $(this).find('.locAddress').text().includes(input) != true ) {
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