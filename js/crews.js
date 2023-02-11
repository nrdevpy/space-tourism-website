// Data json.
import data from './fetch.js'

const crewSection = document.querySelector('.crew__section')
const bulletPointsList = document.querySelector('.bulletsPoints')
let specialistsNames = [];




// App
data().then(data => {
    const { crew } = data
    let innerSpecialist = ''
    let bulletsPoints = ''

    crew.forEach(specialist => {
        const { name, role, bio } = specialist
        const { webp } = specialist.images
        specialistsNames.push(name)
        innerSpecialist += `
            <article data-name="${name}" class="crew__section__article">
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

