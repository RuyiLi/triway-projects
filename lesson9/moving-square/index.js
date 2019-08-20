document.addEventListener('DOMContentLoaded', init);

const WIDTH = 800;
const HEIGHT = 600;

let ctx;

const player = {
    x: 100,
    y: 100,
    speed: 50,
    width: 100,
    height: 100,
    color: 'red',
    move (event) {
        const direction = event.code;

        if (direction === 'KeyA') {
            player.x -= player.speed;
        }

        if (direction === 'KeyS') {
            player.y += player.speed;
        }

        if (direction === 'KeyD') {
            player.x += player.speed;
        }

        if (direction === 'KeyW') {
            player.y -= player.speed;
        }
    }
}

function randomColor () {
    const chars = 'abcdef1234567890';
    let res = '#';
    for (let i = 0; i < 6; i++)
        res += chars[ Math.floor(Math.random() * 16) ];

    return res;
}

function init () {
    document.addEventListener('keypress', player.move);

    const canvas = document.querySelector('canvas');
    canvas.width = WIDTH;
    canvas.height = HEIGHT;

    ctx = canvas.getContext('2d');

    draw();
}

function draw () {
    ctx.clearRect(0, 0, WIDTH, HEIGHT);
    player.color = randomColor();
    ctx.fillStyle = player.color;
    ctx.fillRect(player.x, player.y, player.width, player.height);
    requestAnimationFrame(draw);
}