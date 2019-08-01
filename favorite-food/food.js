document.addEventListener('DOMContentLoaded', function () {

    const submit = document.getElementById('submit');
    const clear = document.getElementById('clear');
    const input = document.getElementById('input');
    const p = document.getElementById('food');

    submit.addEventListener('click', function () {
        const value = input.value;
        p.innerText = `Your favorite food is ${ value }.`;
    });

    clear.addEventListener('click', function () {
        input.value = p.innerText = '';
    });

});




