let locations = [];

function setLocations(data) {
    locations = data;
}

function getLocations() {
    return locations;
}

function locationsBuilder(locations) {
    let domString = '';
    for(let i = 0; i < locations.length; i++) {
        domString += `<div class="card ${locations[i].shootTime}" style="width: 18rem;">`
        domString +=     `<img class="card-img-top" src="${locations[i].image}" alt="Card image cap">`
        domString +=     `<div class="card-body">`
        domString +=         `<h5 class="card-title">${locations[i].name}</h5>`
        domString +=         `<p class="card-text">${locations[i].address}</p>`
        domString +=         `<p class="card-text">Shoot Time: ${locations[i].shootTime}</p>`
        domString +=     `</div>`
        domString += `</div>`
    }
    $('#locationPrintDiv').append(domString);
}

export {setLocations, getLocations, locationsBuilder};