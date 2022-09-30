// Data json.
import data from './fetch.js'

// Upload data to the page.
const planetsList = document.getElementById('planets');
const planet = document.getElementById('planet');

await data().then(data => {
    const destinations = data.destinations
    console.log(destinations[0])
    // Destructuring
    const {
        name,
        image,
        description,
        distance,
        travel
    } = destinations[0];
    const {webp} = destinations[0].images;
    
    // Planet image.
    planet.setAttribute('src', `.${webp}`)
    planet.setAttribute('alt', name)
    
    // Planets list.
    let result = '';
    for (let planet of destinations) {
        let {name} = planet;
        name = name.toLowerCase();

        result += `
            <li>
                <button id="${name}" type="button">${name}</button>
            </li>
        `
    }
    planetsList.innerHTML = result;
})