document.addEventListener('DOMContentLoaded', init);

let list, input;

function init () {
    list = document.querySelector('ul');
    input = document.querySelector('input');

    const btn = document.querySelector('button');

    btn.addEventListener('click', addSequence);
}

function addSequence () {
    const num = parseInt(input.value) * 2;

    input.value = num;

    const listItem = document.createElement('li');
    listItem.innerText = num;
    listItem.style.color = randomColor();
    list.appendChild(listItem);
}

function randomColor () {
    const chars = 'abcdef1234567890';
    let res = '#';
    for (let i = 0; i < 6; i++)
        res += chars[ Math.floor(Math.random() * 16) ];

    return res;
}