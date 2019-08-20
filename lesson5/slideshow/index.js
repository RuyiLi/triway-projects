document.addEventListener('DOMContentLoaded', init);

let images, activeImage = 0;

function init () {
    images = document.querySelectorAll('div.slideshow img');

    const leftBtn = document.querySelector('button.slideshowLeft');
    const rightBtn = document.querySelector('button.slideshowRight');

    leftBtn.addEventListener('click', slideLeft);
    rightBtn.addEventListener('click', slideRight);

    updateSlide();
}

function slideLeft () {
    if (activeImage === 0) {
        activeImage = images.length - 1;
    } else {
        activeImage--;
    }
    updateSlide();
}

function slideRight () {
    if (activeImage === images.length - 1) {
        activeImage = 0;
    } else {
        activeImage++;
    }
    updateSlide();
}

function updateSlide () {
    for (let i = 0; i < images.length; i++) {
        if (i === activeImage) {
            images[ i ].classList.add('active');
        } else {
            images[ i ].classList.remove('active');
        }
    }
}