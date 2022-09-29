const burgerCheck = document.getElementById('hamburger');
const navStyle = document.getElementById('navbar').style;

burgerCheck.addEventListener('change', () => {
    let burgerIsCheck = burgerCheck.checked;
    
    if (burgerIsCheck) {
        navStyle.right = '0%';
    } else {
        navStyle.right = '-100%';
    }
});