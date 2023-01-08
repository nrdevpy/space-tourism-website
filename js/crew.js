import data from "./fetch.js";

data().then(data => {
    const { crew } = data;
    const crewSection = document.querySelector('.crew__section');
    let result = '';

    for (let specialist of crew) {
        let { bio, name, role } = specialist;
        let { webp } = specialist.images;

        result += `
            <article>
                <img class="crewImg" src=".${webp}">
                <h3 class="lightGray">${role}</h3>
                <h2>${name}</h2>
                <p>${bio}</p>
            </article>
        `;
        crewSection.innerHTML = result;
    }
})