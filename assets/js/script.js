"use strict"

const iconMenu = document.querySelector('.nav__icon');
if (iconMenu) {
    const menunav = document.querySelector('.nav')
    iconMenu.addEventListener("click", function(e) {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menunav.classList.toggle('_active');
    });
}