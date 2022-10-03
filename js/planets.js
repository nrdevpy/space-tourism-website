// Data json.
import data from './fetch.js'

// Upload data to the page.
const planetsList = document.getElementById('planets');
const planet = document.getElementById('planet');
const planetName = document.getElementById('planet_name');
const planetDescription = document.getElementById('planet_description');

await data().then(data => {
    const destinations = data.destinations
    console.log(destinations)
    // Destructuring
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
    const planets = document.querySelectorAll(".planet--inactive");
    planets.forEach(planetNav => {
        planetNav.addEventListener('click', () => {
            let id = planetNav.id;
            
            destinations.forEach(destination => {
                if (destination.name === id) {
                    const {
                        name,
                        image,
                        description,
                        distance,
                        travel
                    } = destination;
                    const {webp} = destination.images;
                    
                    // Set planet image.
                    planet.setAttribute('src', `.${webp}`);
                    planet.setAttribute('alt', name);
                    planetName.innerText = name;
                    planetDescription.innerText = description;
                }
            })
        })
    })
    // 
})