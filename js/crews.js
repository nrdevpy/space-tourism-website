// Data json.
import data from './fetch.js'

const specialistsID = [];
const crewImg = document.getElementById('crew_person')
const crewProfession = document.getElementById('crew_profession')
const crewName = document.getElementById('crew_name')
const crewDescription = document.getElementById('crew_description')

data().then(data => {
    const {crew} = data;
    const crewList = document.getElementById('crew');
    let bullets;

    crew.map (specialist => {
        // ID
        const {name} = specialist;
        const id = name.replace(" ", "").toLocaleLowerCase();
        specialistsID.push(id);

        // Bullets points - Fetching data
        if (bullets === undefined){
            bullets = `<li id="${id}" class="crew__bullet active"></li>`;
        } else {
            bullets += `<li id="${id}" class="crew__bullet"></li>`;
        }
    })

    // Adding bullets points
    crewList.innerHTML = bullets;

    // Bullets event listener
    crewList.childNodes.forEach(specialistLi => {
        specialistLi.addEventListener('click', () => {
            crew.map (specialist => {
                const {name, bio, role} = specialist;
                const {webp} = specialist.images;
                const id = name.replace(" ", "").toLocaleLowerCase();
                if (specialistLi.id === id) {
                    // Toggle active bullet
                    const activeBullet = document.querySelector('.crew__bullet.active');
                    const inactiveBullet = document.getElementById(id)
                    activeBullet.classList.toggle('active');
                    inactiveBullet.classList.toggle('active');
                    
                    // Change info
                    crewImg.setAttribute('src', `.${webp}`)
                    crewProfession.innerHTML = role;
                    crewName.innerHTML = name;
                    crewDescription.innerHTML = bio;
                }
            })
        })
    })
})