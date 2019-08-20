document.addEventListener('DOMContentLoaded', init);

const [ WIDTH, HEIGHT ] = [ 800, 600 ];
const imageNames = [ 'player', 'invader' ];
const images = {};

let ctx;

function init () {

    document.addEventListener('keydown', function (event) {
        keysPressed[ event.keyCode ] = true;
    });

    document.addEventListener('keyup', function (event) {
        keysPressed[ event.keyCode ] = false;
    });

    const canvas = document.querySelector('canvas');

    canvas.width = WIDTH;
    canvas.height = HEIGHT;

    ctx = canvas.getContext('2d');

    setInterval(spawnEnemy, 100);

    loadImages(gameLoop);
}

function loadImages (cb) {
    let counter = 0;
    for (const imageName of imageNames) {
        const img = new Image();
        img.src = `img/${ imageName }.png`;
        img.addEventListener('load', function () {
            images[ imageName ] = img;

            counter++;
            if (counter === imageNames.length) {
                cb();
            }
        });
    }
}

function spawnEnemy () {
    Enemy.spawn(Math.random() * 200 + 25, 25);
}

function gameLoop () {
    ctx.clearRect(0, 0, WIDTH, HEIGHT);
    player.action();

    Bullet.renderAll();
    Enemy.renderAll();

    requestAnimationFrame(gameLoop);
}