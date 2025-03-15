const burgerButton = document.querySelector('.menu-button');
const burgerMenu = document.querySelector('.burger-menu');
const burgerOverlay = document.querySelector('.burger-overlay');
const menuLinks = document.querySelectorAll('.burger-menu a'); 

burgerButton.addEventListener('click', function () {
    burgerMenu.classList.toggle('active');
    burgerOverlay.classList.toggle('active');
    burgerButton.classList.toggle('rotated'); 
});


function closeBurgerMenuOnResize() {
    if (window.innerWidth > 850 && burgerMenu.classList.contains('active')) {
        burgerMenu.classList.remove('active');
        burgerButton.classList.remove('rotated');
        burgerOverlay.classList.remove('active');
    }
}

function closeBurgerMenuOnOverlayClick() {
    if (burgerMenu.classList.contains('active')) {
        burgerMenu.classList.remove('active');
        burgerOverlay.classList.remove('active');
        burgerButton.classList.remove('rotated');
    }
}

window.addEventListener('resize', closeBurgerMenuOnResize);
burgerOverlay.addEventListener('click', closeBurgerMenuOnOverlayClick);

function closeMenu() {
    burgerMenu.classList.remove('active');
    burgerOverlay.classList.remove('active');
    burgerButton.classList.remove('rotated');
}

menuLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
});