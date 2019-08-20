document.addEventListener('DOMContentLoaded', init);

let elements;

function init () {
    elements = document.querySelectorAll('*');
    window.addEventListener('scroll', fadeOnScroll);
    fadeOnScroll();
}

function fadeOnScroll () {
    const distFromTop = window.pageYOffset + window.innerHeight - 150;
    for (const el of elements) {
        console.log(distFromTop, el.offsetTop)
        if (el.offsetTop <= distFromTop) {
            el.classList.add('active');
        }
    }
}