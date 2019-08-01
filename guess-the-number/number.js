document.addEventListener('DOMContentLoaded', function () {
    const num = Math.floor(Math.random() * 10) + 1;
    const p = document.getElementById('guesses');

    while (true) {
        let guess = prompt('Guess a number between 1 and 10.');
        guess = parseInt(guess);

        if (guess === num) {
            p.innerText += `Congratulations! The number was ${ num }.`;
            break;
        } else {
            const relation = guess > num ? 'large' : 'small';
            p.innerText += `${ guess } was too ${ relation }.\n`;
        }
    }

    const button = document.getElementById('restart');
    function restart () {
        location.reload();
    }

    // button.onclick = restart;

    button.addEventListener('click', restart);
});