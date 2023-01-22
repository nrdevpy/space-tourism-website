// Data json.
import data from './fetch.js'

const crewSection = document.querySelector('.crew__section')
const bulletPointsList = document.querySelector('.bulletsPoints')

data().then(data => {
    const { crew } = data
    let innerSpecialist = ''
    let bulletsPoints = ''
        
    crew.forEach(specialist => {
        const { name, role, bio } = specialist
        const { webp } = specialist.images
        innerSpecialist += `
            <article class="crew__section__article">
                <img class="crewImg" src=".${webp}"/>
                <h3 class="lightGray">${role}</h3>
                <h2>${name}</h2>
                <p>${bio}</p>
            </article>
       `
       bulletsPoints += `
            <li class="crew__bullet"></li>
       `
    })
    
    crewSection.innerHTML = innerSpecialist;
    bulletPointsList.innerHTML = bulletsPoints;
})