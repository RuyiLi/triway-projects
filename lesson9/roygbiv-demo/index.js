document.addEventListener('DOMContentLoaded', init);

let ctx, i = 0;

const WIDTH = 640;
const HEIGHT = 480;

function init () {
    const canvas = document.querySelector('canvas');
    ctx = canvas.getContext('2d');
    canvas.width = 640;
    canvas.height = 480;
    canvas.style.backgroundColor = '#181818';

    draw();
}

function draw () {
    const colors = [ 'red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet' ];
    for (let y = 0; y < 7; y++) {
        drawRect(colors[ y ], y * 50);
    }
}

function drawRect (color, pos) {
    ctx.fillStyle = color;
    ctx.fillRect(0, pos, WIDTH, 50);
}