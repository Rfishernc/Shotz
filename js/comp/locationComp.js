import {getMovie} from '../data/movieData.js';
import {getLocation} from '../data/locationData.js';

let movieNames = '';

function setLocations() {
    getMovie().then(function(movieList) {
        return getLocation(movieList).then(function(locations) {
            locationsBuilder(locations);
        })
    }).catch(function(error) {
        console.log(error);
    })
}

function getLocations() {
    return locations;
}

function locationsBuilder(locations) {
    let domString = '';
    for(let i = 0; i < locations.locations.length; i++) {
        domString += `<div class="card ${locations.locations[i].shootTime} col">`
        domString +=     `<img class="card-img-top locimage" src="${locations.locations[i].image}" alt="Card image cap">`
        domString +=     `<div class="card-body">`
        domString +=         `<h5 class="card-title locName">${locations.locations[i].name}</h5>`
        domString +=         `<p class="card-text locAddress">${locations.locations[i].address}</p>`
        domString +=         `<p class="card-text">Shoot Time: ${locations.locations[i].shootTime}</p>`
        for(let j= 0; j < locations.locations[i].movies.length; j++) {
            movieNames = movieNames + ', ' + locations.locations[i].movies[j].name;    
        }
        domString +=         `<P class='card-text locMovies'>Movies on location: ${movieNames}</p>`
        domString +=     `</div>`
        domString += `</div>`
        movieNames = '';
    }
    $('#locationPrintDiv').html(domString);
}

export {setLocations, getLocations, locationsBuilder};