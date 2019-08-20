document.addEventListener('DOMContentLoaded', init);

let elements;

function init () {
    elements = document.querySelectorAll('p');

    window.addEventListener('scroll', showOnScroll);
    showOnScroll();
}

function showOnScroll () {
    const distFromTop = window.pageYOffset + window.innerHeight - 200;

    for (const el of elements) {
        if (el.offsetTop <= distFromTop) {
            el.classList.add('active');
        } else {
            el.classList.remove('active');
        }
    }
}