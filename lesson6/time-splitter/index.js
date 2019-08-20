document.addEventListener('DOMContentLoaded', init);

let input, p;

function init () {
    input = document.querySelector('input');
    p = document.querySelector('p');

    const btn = document.querySelector('button');

    btn.addEventListener('click', updateTime);
}

function pad (num) {
    return String(num).padStart(2, 0)
}

function parseTime (minutes) {
    let hours = Math.floor(minutes / 60);
    let days = Math.floor(hours / 24);
    hours %= 24;
    minutes %= 60;
    return [ days, hours, minutes ];
}

function updateTime () {
    const minutes = +input.value;
    const time = parseTime(minutes).map(pad).join(':');
    p.innerText = time;
}