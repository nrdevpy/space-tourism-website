const burgerCheck = document.getElementById('hamburger');
const navStyle = document.getElementById('navbar').style;
const navAnchorList = document.querySelectorAll('#navbar.navbar > li > a')

burgerCheck.addEventListener('change', () => {
    let burgerIsCheck = burgerCheck.checked;
    
    if (burgerIsCheck) {
        navStyle.right = '0%';
    } else {
        navStyle.right = '-100%';
    }
});

navAnchorList.forEach(anchor => {
    addEventListener('click', () => {
        navStyle.right = '-100%';
    })
})