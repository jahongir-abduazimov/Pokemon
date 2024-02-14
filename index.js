"use strict";

let toggleBtn = document.querySelector('.toggle-btn'),
toggleMenu = document.querySelector('.toggle-menu'),
backArrow = document.querySelector('.back-arrow'),
bg = document.querySelector('.bg'),
body = document.querySelector('body');

toggleBtn.addEventListener('click', () => {
    toggleMenu.classList.toggle('translate-x-[570px]')
    body.setAttribute('class', 'overflow-y-hidden')
    bg.classList.toggle('hidden')
})

backArrow.addEventListener('click', () => {
    toggleMenu.classList.toggle('translate-x-[570px]')
    body.setAttribute('class', 'overflow-y-scroll')
    bg.classList.toggle('hidden')
})