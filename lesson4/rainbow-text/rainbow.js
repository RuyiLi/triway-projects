document.addEventListener('DOMContentLoaded', init);

let text;

function init () {
    const btn = document.getElementById('rainbow');
    text = document.getElementById('text');

    btn.addEventListener('click', function () {
        setInterval(changeColor, 200);
    });
}

function randomColor () {
    const chars = 'abcdef1234567890';
    let res = '#';
    for (let i = 0; i < 6; i++)
        res += chars[ Math.floor(Math.random() * 16) ];

    return res;
}

function changeColor () {
    text.style.color = randomColor();
}