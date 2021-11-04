var year = new Date().getFullYear();

var date = `${year} (c) - Samwyle bandtitos`;

document.getElementsByTagName('footer')[0].innerHTML = date;


const btnOpen = document.getElementById('openMenu');
const btnClose = document.getElementById('closeMenu');

function toggleMenu(){
    const nav = document.getElementById('nav');
    const header = document.getElementById('header');
    nav.classList.toggle('active');
    header.classList.toggle('active');
}

btnOpen.addEventListener('click',toggleMenu);
btnClose.addEventListener('click',toggleMenu)