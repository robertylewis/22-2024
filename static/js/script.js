// Planet placement; [y%, x%, width]
let planets = {
    "sun": [0.1, 0.5, 600],
    "mercury": [0.2, 0.7, 400],
    "venus": [0.25, 0.2, 500],
    "earth": [0.35, 0.75, 500],
    "mars": [0.4, 0.2, 400],
    "jupiter": [0.45, 0.6, 1000],
    "saturn": [0.6, 0.3, 1200],
    "uranus": [0.7, 0.65, 800],
    "neptune": [0.85, 0.3, 600],
    "pluto": [0.95, 0.65, 400],
}

function placePlanets() {
    const height = Math.max(document.body.scrollHeight, document.body.offsetHeight, 
        document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight);

    for (const p in planets) {
        let currPlanet = $("img.planet-" + p);
        currPlanet.css("top", (planets[p][0] * height * 0.9) + "px")
        currPlanet.css("left", (planets[p][1] * 100) + "vw")
        currPlanet.css("width", planets[p][2] + "px")
        currPlanet.css("margin-left", "-" + (planets[p][2] / 2) + "px")
    }
}

$(window).resize(placePlanets);
$(document).ready(placePlanets);

// Swapping astronauts
let counter = 0;
const prefix = "static/img/planets/";
const astronauts = ["astronaut.png", "astronaut_person.png", "astronaut_shrek.png"];
$('#astronaut').click(() => {
    counter++;
    $('#astronaut').attr("src", prefix + astronauts[counter % 3]);
})

// Navbar
function openNav() {
    document.getElementById("navholder-mobile").style.height = "100%";
}

function closeNav() {
    document.getElementById("navholder-mobile").style.height = "0%";
}
