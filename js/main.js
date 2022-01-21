// Navbar Slide in
const openMenuBtn = document.getElementById('close-menu-icon');
const closeMenuBtn = document.getElementById('close-menu-icon');

function openMenu(){
    document.getElementById('navbar__menu').style.width = "100%";
}

function closeMenu(){
    document.getElementById('navbar__menu').style.width = "0";
}

openMenuBtn.addEventListener('click', () => {openMenu()});
closeMenuBtn.addEventListener('click', () => {closeMenu()});