const hamburgerElement = document.querySelector('#navbutton');
const navElement = document.querySelector('.menulinks');

hamburgerElement.addEventListener('click', () => {
    navElement.classList.toggle('open');
    hamburgerElement.classList.toggle('open');
});