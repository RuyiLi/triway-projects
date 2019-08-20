document.addEventListener('DOMContentLoaded', init)
let count;
function init() {
    const col = document.getElementById('color');
    const save = document.getElementById('save');
    document.body.style.backgroundColor = localStorage.Colr;
    save.addEventListener('click', save);
    col.addEventListener('click', color);
}
function randomColor() {
    const chars = 'abcdef1234567890';
    let res = '#';
    for (let i = 0; i < 6; i++)
        res += chars[Math.floor(Math.random() * 16)];

    return res;
}
function color() {
    count = randomColor();
    document.body.style.backgroundColor = count;
}
function save() {
    console.log(count);
    localStorage['Colr'] = count;
    console.log(localStorage);
}