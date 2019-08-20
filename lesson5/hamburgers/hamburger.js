document.addEventListener('DOMContentLoaded', init);

let hamburgerDiv, isOpen = true;

function init () {
    hamburgerDiv = document.querySelector('div.hamburgerContent');

    const hamburgerBtn = document.querySelector('button.hamburgerButton');

    hamburgerBtn.addEventListener('click', toggleNavbar);

    toggleNavbar();
}

function toggleNavbar () {
    if (isOpen) {
        hamburgerDiv.classList.remove('active');
    } else {
        hamburgerDiv.classList.add('active');
    }
    isOpen = !isOpen;
}