document.addEventListener('DOMContentLoaded', init);

const $ = document.querySelector.bind(document);
let hitBtn, foldBtn, playerHand, computerHand, status;

function init () {
    hitBtn = $('button#hit');
    foldBtn = $('button#fold');
    playerHand = $('p#playerHand');
    computerHand = $('p#computerHand');
    status = $('p#status');

    hitBtn.addEventListener('click', hit);
    foldBtn.addEventListener('click', fold);
    $('button#restart').addEventListener('click', () => location.reload());
}

function showCards () {
    if (status.innerText !== 'Ongoing') return;
    playerHand.innerText = player.join(' ');
    computerHand.innerText = computer.join(' ');
}

