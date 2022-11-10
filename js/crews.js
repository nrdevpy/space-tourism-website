// Data json.
import data from './fetch.js'

// Upload data to the page.
const crewPerson = document.getElementById('crew_person');
const crewList = document.getElementById('crews');
const crewName = document.getElementById('crew_name');
const crewDescription = document.getElementById('crew_description');
const crewProfession = document.getElementById('crew_profession');

/* await data().then(data => {
    const destinations = data.destinations
    // Default destination
    // console.log(destinations)
    const {
        name,
        description,
        distance,
        travel
    } = destinations[0];
    const {webp} = destinations[0].images;
    
    // Planet image.
    planet.setAttribute('src', `.${webp}`)
    planet.setAttribute('alt', name)
    // Planet Title.
    planetName.innerText = name;
    // Planet Description.
    planetDescription.innerText = description;
    // Planet Distance.
    planetDistance.innerText = distance;
    // Planet Travel.
    planetTravel.innerText = travel;

    // Planets list.
    let list = '';
    for (let planet of destinations) {
        let {name} = planet;

        if (list === '') {
            list += `
            <li>
                <button class="planet--active" id="${name}" type="button">${name}</button>
            </li>
        `    
        } else {
            list += `
                <li>
                    <button class="planet--inactive" id="${name}" type="button">${name}</button>
                </li>
            `
        }
    }
    planetsList.innerHTML = list;

    // Change planet
    const planets = document.querySelectorAll(".planets button");
    planets.forEach(planetNav => {
        planetNav.addEventListener('click', () => {
            let id = planetNav.id;
            planets.forEach(planetList => {
                planetList.setAttribute('class', 'planet-inactive');
            })
            destinations.forEach(destination => {  
                if (destination.name === id) {
                    const {
                        name,
                        description,
                        distance,
                        travel
                    } = destination;
                    const {webp} = destination.images;
                    
                    // Set planet image.
                    planet.setAttribute('src', `.${webp}`);
                    planet.setAttribute('alt', name);
                    planetNav.setAttribute('class', 'planet--active');
                    planetName.innerText = name;
                    planetDescription.innerText = description;
                    planetDistance.innerText = distance;
                    planetTravel.innerText = travel;
                }
            })
        })
    })
    // 
}) */