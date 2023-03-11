// Data json.
import data from './fetch.js'

const crewSection = document.querySelector('.crew__section')
const bulletPointsList = document.querySelector('.bulletsPoints')




// App
data().then(data => {
    const { crew } = data
    let innerSpecialist = ''
    let bulletsPoints = ''
    let specialistsNames = [];

    crew.forEach(specialist => {
        const { name, role, bio } = specialist
        const { webp } = specialist.images
        specialistsNames.push(name)
        innerSpecialist += `
            <article id="${name.replace(/\s/g, "")}" data-name="${name}" class="crew__section__article desktop__flex">
                <img class="crewImg" src=".${webp}"/>
                <div>
                    <h3 class="lightGray">${role}</h3>
                    <h2>${name}</h2>
                    <p class="primaryColor">${bio}</p>
                </div>
            </article>
       `
        bulletsPoints += `
            <a href="#${name.replace(/\s/g, "")}" class="crew__bullet"></a>
       `
    })
    crewSection.innerHTML = innerSpecialist;
    bulletPointsList.innerHTML = bulletsPoints;


    // Observer
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            const dataName = entry.target.getAttribute('data-name');
            const specialistNumber = specialistsNames.findIndex(elem => elem === dataName)
            const bullets = document.querySelectorAll('.crew__bullet')

            bullets.forEach(bullet => bullet.classList.remove('active'))
            bullets[specialistNumber].classList.add('active')
        })
    })
    // Get all specialists
    const specialists = document.querySelectorAll('.crew__section__article')
    specialists.forEach(specialist => {
        observer.observe(specialist)
    })
})

