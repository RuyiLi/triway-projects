document.addEventListener('DOMContentLoaded', init);

let catImg, dogImg;

function init () {
    catImg = document.querySelector('img#catImg');
    dogImg = document.querySelector('img#dogImg');

    const catBtn = document.querySelector('button#catBtn');
    const dogBtn = document.querySelector('button#dogBtn');

    catBtn.addEventListener('click', cat);
    dogBtn.addEventListener('click', dog)
}

function cat () {
    catImg.classList.add('active');
    dogImg.classList.remove('active');
}

function dog () {
    dogImg.classList.add('active');
    catImg.classList.remove('active');
}