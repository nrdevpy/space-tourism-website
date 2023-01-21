// Data json.
import data from './fetch.js'

const crewSection = document.querySelector('.crew__section')

data().then(data => {
    const { crew } = data
    let innerSpecialist = ''
    
    crew.forEach(specialist => {
        const { name, role, bio } = specialist
        const { webp } = specialist.images
        innerSpecialist += `
            <article class="crew__section__article">
                <div class="">                
                    <img class="crewImg" 
                        src=".${webp}"
                    >
                </div>
                <h3 class="lightGray">${role}</h3>
                <h2>${name}</h2>
                <p>${bio}</p>
            </article>
       `
    })
    crewSection.innerHTML = innerSpecialist;
})