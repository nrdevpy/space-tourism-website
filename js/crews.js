// Data json.
import data from './fetch.js'

const main = document.querySelector('.main')

data().then(data => {
    const { crew } = data
    let innerSpecialist = ''
    
    crew.forEach(specialist => {
        const { name, role, bio } = specialist
        const { webp } = specialist.images
        console.log(webp)
        innerSpecialist += `
            <section class="crew__header container">
                <div class="crew__person">                
                    <img class="crewImg" 
                        src=".${webp}"
                    >
                </div>
                <h3 class="lightGray">${role}</h3>
                <h2>${name}</h2>
                <p>${bio}</p>
            </section>
       `
    })
    main.innerHTML = innerSpecialist;
})