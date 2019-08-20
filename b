document.addEventListener('DOMContentLoaded', init);

const [ WIDTH, HEIGHT ] = [ 800, 600 ];
const SHOOT_DELAY = 5;

let ctx;
const imageSources = [ 'player', 'invader' ];
const images = {};
const player = {
    x: WIDTH / 2,
    y: HEIGHT - 50,
    speed: 10,
    width: 25,
    height: 25,
    action (event) {
        const key = event.code;

        if (key === 'KeyX' || key === 'KeyZ')
            Bullet.shoot(player);

        if (key === 'KeyJ')
            player.x -= player.speed;

        if (key === 'KeyL')
            player.x += player.speed;

    }
}

function init () {
    document.addEventListener('keydown', player.action);

    const canvas = document.querySelector('canvas');

    canvas.width = WIDTH;
    canvas.height = HEIGHT;

    canvas.style.backgroundColor = '#c0ffee';

    ctx = canvas.getContext('2d');

    loadImages(imageSources, draw);

    setInterval(Enemy.spawn, 800);
}

function loadImages (imageQueue, cb) {
    let numLoaded = 0;
    for (const img of imageQueue) {
        images[ img ] = new Image();
        images[ img ].src = `img/${ img }.png`;
        images[ img ].addEventListener('load', function () {
            if (++numLoaded === imageSources.length) {
                cb();
            }
        });
    }
}

function draw () {
    ctx.clearRect(0, 0, WIDTH, HEIGHT);

    ctx.drawImage(images.player, player.x, player.y, player.width, player.height);

    Bullet.renderAll();
    Enemy.renderAll();

    requestAnimationFrame(draw);
}