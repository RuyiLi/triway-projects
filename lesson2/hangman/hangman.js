document.addEventListener('DOMContentLoaded', init);

const answer = 'javascript'.toLowerCase();
let current = new Array(answer.length).fill('_');
let guessed = '';
let lives = 7;

let input, trash, word, livesText;

function updateGuess () {
    word.innerText = current.join('');
    if (word.innerText === answer) {
        word.innerHTML += '<br><br><strong>Congratulations! You win!</strong>'.toLowerCase();
        input.removeEventListener('input', guess);
    }
}

function init () {
    livesText = document.getElementById('lives');
    input = document.getElementById('guess');
    trash = document.getElementById('trash');
    word = document.getElementById('word');

    updateGuess();

    input.addEventListener('input', guess);
    document.querySelector('button').addEventListener('click', function () {
        location.reload();
    });
}

function guess (e) {
    const char = e.data.toLowerCase();
    input.value = '';

    if (guessed.includes(char)) {
        return;
    } else {
        guessed += char;
    }

    if (answer.includes(char)) {
        for (let i = 0; i < answer.length; i++) {
            if (char === answer[ i ]) {
                current[ i ] = char;
                updateGuess();
            }
        }
    } else {
        trash.innerText += char;
        if (--lives === 0) {
            word.innerHTML += `<br><br><strong>Game Over. The word was <em>${ answer }</em>.</strong>`.toLowerCase();
            input.removeEventListener('input', guess);
        }
        livesText.innerText = `${ lives } lives`;
    }

}