document.addEventListener('DOMContentLoaded', init);

let fontSize = 1;

function init () {
    const upscaleBtn = document.getElementById('upscale');
    const downscaleBtn = document.getElementById('downscale');

    upscaleBtn.addEventListener('click', upscale);
    downscaleBtn.addEventListener('click', downscale);
}

function upscale () {
    fontSize += 0.05;
    updateSize();
}

function downscale () {
    fontSize -= 0.05;
    updateSize();
}

function updateSize () {
    for (const el of document.querySelectorAll('*')) {
        el.style.fontSize = fontSize + 'rem';
    }
}