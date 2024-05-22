const header = document.querySelector("header");

window.addEventListener("scroll", function() {
    header.classList.toggle("sticky", window.scrollY > 80);
});

let menu = document.querySelector('#menu-icon');
let navList = document.querySelector('.nav-list');


menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navList.classList.toggle('open');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navList.classList.remove('open');
}