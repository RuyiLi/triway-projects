document.addEventListener('DOMContentLoaded', init);

const WIDTH = 640;
const HEIGHT = 480;

let ctx;

function init () {
    const canvas = document.querySelector('canvas');
    canvas.width = WIDTH;
    canvas.height = HEIGHT;

    ctx = canvas.getContext('2d');

    draw();
}

function draw () {
    const colors = [ 'red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet' ];
    for (let y = 0; y < 7; y++) {
        drawRect(colors[ y ], y * 50);
    }
}

function drawRect (color, yPosition) {
    ctx.fillStyle = color;
    ctx.fillRect(0, yPosition, WIDTH, 50);
}