const player = [], computer = [];

const deck = new Array(10).fill(4);

function sum (arr) {
    return arr.reduce((a, b) => a + b, 0);
}

function randomCard () {
    return Math.floor(Math.random() * 10);
}

function deal () {
    do {
        var num = randomCard();
    } while (deck[ num ] === 0);
    deck[ num ]--;
    return num + 1;
}

function aiMove () {
    if (sum(computer) < 15)
        return !!computer.push(deal());
    return false;
}

function checkStatus (finished = false) {
    const p = sum(player);
    const c = sum(computer);

    if (p > 21) {
        return 'Computer wins';
    }

    if (c > 21) {
        return 'Player wins';
    }

    if (finished) {
        if (p === c) {
            return 'Tie';
        } else if (p < c) {
            return 'Computer wins';
        } else {
            return 'Player wins';
        }
    }

    return 'Ongoing';
}

function hit () {
    player.push(deal());
    aiMove();
    showCards();
    status.innerText = checkStatus();
    // console.log(player, computer, deck);
}

function fold () {
    while (aiMove()) { }
    showCards();
    status.innerText = checkStatus(true);
}