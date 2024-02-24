"use strict";

let toggleBtn = document.querySelector('.toggle-btn'),
toggleMenu = document.querySelector('.toggle-menu'),
backArrow = document.querySelector('.back-arrow'),
bg = document.querySelector('.bg'),
body = document.querySelector('body');


function toggleBtnMenu() {
    toggleMenu.classList.toggle('translate-x-[570px]')
    bg.classList.toggle('hidden')
    body.classList.toggle('overflow-y-hidden')
}

toggleBtn.addEventListener('click', () => {
    toggleBtnMenu()
})

backArrow.addEventListener('click', () => {
    toggleBtnMenu()
})

bg.addEventListener('click', () => {
    toggleBtnMenu()
})