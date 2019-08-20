document.addEventListener('DOMContentLoaded', init);

let input, add, list;

function init () {
    input = document.getElementById('input');
    list = document.getElementById('list');
    add = document.getElementById('add');

    add.addEventListener('click', addItem);
}

function addItem () {
    const item = input.value;
    input.value = null;

    const listItem = document.createElement('li');
    listItem.innerText = item;
    list.appendChild(listItem);
}