// Planet placement; [y%, x%, width]
let planets = {
    "sun": [0.1, 0.5, 500],
    "mercury": [0.2, 0.7, 500],
    "venus": [0.25, 0.2, 500],
    "earth": [0.35, 0.75, 500],
    "mars": [0.4, 0.2, 500],
    "jupiter": [0.45, 0.6, 500],
    "saturn": [0.6, 0.3, 500],
    "uranus": [0.7, 0.65, 500],
    "neptune": [0.85, 0.3, 500],
    "pluto": [0.95, 0.65, 500],
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
const prefix = "static/img/plants/";
const plants = ["coinplant_nobaby.png", "coinplant.png"];
$('#plant_shift').click(() => {
    counter++;
    $('#plant_shift').attr("src", prefix + plants[counter % 2]);
})

// Navbar
function openNav() {
    document.getElementById("navholder-mobile").style.height = "100%";
}

function closeNav() {
    document.getElementById("navholder-mobile").style.height = "0%";
}
