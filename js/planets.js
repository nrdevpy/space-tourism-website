// Data json.
import data from './fetch.js'

// Upload data to the page.
const planetsElement = document.getElementById('planets');
const planet = document.getElementById('planet');

await data().then(data => {
    const destinations = data.destinations
    for (let planet of destinations) {
        // Destructuring
        const {
            name,
            image,
            description,
            distance,
            travel
        } = planet;
        const {webp} = planet.images;

        
    }
})