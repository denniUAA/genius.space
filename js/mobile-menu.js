const mobileMenu = document.querySelector('.mobile-menu');
const mobileMenuBtnOpen = document.querySelector('.menu-btn-open');
const mobileMenuBtnClose = document.querySelector('.menu-btn-close');

const toggleMenu = () => mobileMenu.classList.toggle('is-open');

mobileMenuBtnOpen.addEventListener('click', toggleMenu);
mobileMenuBtnClose.addEventListener('click', toggleMenu);
