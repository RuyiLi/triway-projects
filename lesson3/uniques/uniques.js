document.addEventListener('DOMContentLoaded', init);

const $ = document.querySelector.bind(document);

function init () {
    const clear = $('button');
    const input = $('input');
    const p = $('p');

    input.addEventListener('input', function (event) {
        const char = event.data;
        if (!p.innerText.includes(char)) {
            p.innerText += char;
        }
    });

    clear.addEventListener('click', function () {
        input.value = null;
        input.focus();
    });
}