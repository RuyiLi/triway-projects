document.addEventListener('DOMContentLoaded', init);
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

let images, activeImage = 0;

function init () {
    const leftBtn = $('button.slideshowLeft');
    const rightBtn = $('button.slideshowRight');

    leftBtn.addEventListener('click', slideLeft);
    rightBtn.addEventListener('click', slideRight);

    images = Array.from($$('div.slideshow img'));
    updateSlide();
}

function slideLeft () {
    activeImage = Math.max(activeImage - 1, 0);
    updateSlide();
}

function slideRight () {
    activeImage = Math.min(activeImage + 1, images.length - 1);
    updateSlide();
}

function updateSlide () {
    for (let i = 0; i < images.length; i++) {
        if (i === activeImage) {
            images[ i ].style.display = '';
        } else {
            images[ i ].style.display = 'none';
        }
    }
}