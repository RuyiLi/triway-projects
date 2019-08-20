document.addEventListener('DOMContentLoaded', init);

let ctx;

function init () {
    const canvas = document.querySelector('canvas');
    ctx = canvas.getContext('2d');
    canvas.width = 640;
    canvas.height = 480;
    canvas.style.backgroundColor = '#181818';

    const buttons = document.querySelectorAll('button');
    buttons[ 0 ].addEventListener('click', function () {
        ctx.fillRect(0, 0, 100, 100);
    });
    buttons[ 1 ].addEventListener('click', function () {
        ctx.fillStyle = 'white';
    });
    buttons[ 2 ].addEventListener('click', function () {
        ctx.fillRect(100, 0, 100, 100);
    });
    buttons[ 3 ].addEventListener('click', function () {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    });
    buttons[ 4 ].addEventListener('click', function () {
        ctx.font = '40px Fira Code';
    });
    buttons[ 5 ].addEventListener('click', function () {
        ctx.fillText('Hello, World!', 0, 0);
    });
    buttons[ 6 ].addEventListener('click', function () {
        ctx.fillText('Hello, World!', 0, 40);
    });
    buttons[ 7 ].addEventListener('click', function () {
        const { width } = ctx.measureText('Hello, World!');
        alert(`The width of "Hello, World!" is ${ width } pixels.`);
    });
    buttons[ 8 ].addEventListener('click', function () {
        const { width } = ctx.measureText('Hello');
        ctx.fillText('Hello', canvas.width / 2 - width / 2, canvas.height / 2);
    });
    buttons[ 9 ].addEventListener('click', function () {
        const image = new Image();
        image.src = 'omae.jpg';
        image.addEventListener('load', function () {
            ctx.drawImage(image, 0, 0);
        });
    });
}