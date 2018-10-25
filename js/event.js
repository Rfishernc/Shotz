import {getLocations, locationsBuilder} from './comp/locationComp.js';
import {setMovies} from './comp/movieComp.js';

function searchEvent() {
    $('#input').keyup(function() {
        $('.card').show();
        let input = $('#input').val();
        console.log(input);
        $('.card').filter(function() {
            if($(this).find('.locName').text().includes(input) != true && $(this).find('.locAddress').text().includes(input) != true && $(this).find('.locMovies').text().includes(input) != true) {
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

function movieEvent() {
    $('.movieButton').on("click", function() {
        let clicked = $(event.target).closest('.movieButton')[0].id;
        let clickedName;
        if($(event.target).siblings('.movieName')[0] !== undefined) {
            clickedName = $(event.target).siblings('.movieName')[0].id;
        }
        else {
            clickedName = $(event.target).find('.movieName')[0].id;
        }
        setMovies(clicked);
        $('.card').show;
        $('.card').filter(function() {
            if($(this).find('.locMovies').text().includes(clickedName) != true) {
                return this;
            }
        }).hide();
    })
}

function backEvent() {
    $('#backButton').on('click', function() {
        setMovies();
    })
}

export {searchEvent, timeOfDayEvent, movieEvent, backEvent};