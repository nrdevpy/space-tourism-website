import data from './fetch.js'

const techSection = document.querySelector('.tech__header')
const techBullets = document.querySelector('.tech__bullets')

data().then(data => {
    let techArticle = '';
    let bulletsPoints = '';
    let techNames = [];

    data.technology.forEach((tech, index)=> {
        const { name, description } = tech;
        const { landscape } = tech.images;
        techArticle += `
        <article data-name="${name}" class="tech__article">
            <img src=".${landscape}">
            <div>
                <h3 class="lightGray">The terminology...</h3>
                <h2>${name}</h2>
                <p class="primaryColor">${description}</p>
            </div>
        </article>
        `;

        bulletsPoints += `
            <li class="tech__bullet">${index + 1}</li>
       `
       techNames.push(name)
    })
    techSection.innerHTML = techArticle;
    techBullets.innerHTML = bulletsPoints;

    // Observer
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            const dataName = entry.target.getAttribute('data-name');
            const techNumber = techNames.findIndex(elem => elem === dataName)
            const bullets = document.querySelectorAll('.tech__bullet')

            bullets.forEach(bullet => bullet.classList.remove('active'))
            bullets[techNumber].classList.add('active')
        })
    })
    // Get all technologies
    const technologies = document.querySelectorAll('.tech__article')
    technologies.forEach(tech => {
        observer.observe(tech)
    })
})