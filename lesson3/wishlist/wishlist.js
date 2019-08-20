document.addEventListener('DOMContentLoaded', init);

function init () {
    const form = document.querySelector('form');
    const list = document.querySelector('ul');
    const item = document.querySelector('#item');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const wish = item.value;
        item.value = null;

        const listItem = document.createElement('li');
        listItem.innerText = wish;
        list.appendChild(listItem);

        item.focus();
    });
}