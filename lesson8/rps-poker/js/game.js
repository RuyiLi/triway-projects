const cards = [ 'rock', 'paper', 'scissors' ];

function deal () {
    return cards[ Math.floor(Math.random() * 3) ];
}

function checkRPSWin (a, b) {
    a = cards.indexOf(a);
    b = cards.indexOf(b);

    if (a === b)
        // Tie
        return 0;

    if ((a === 0 && b === 2) || (b === a - 1))
        // Player wins
        return 1;

    // Computer wins
    return -1;
}

function doRound () {
    const playerHand = new Array(5).fill(0).map(deal);

    return {
        playCard (chosenCard) {
            const computerHand = new Array(5).fill(0).map(deal);
            const computerCard = computerHand[ Math.floor(Math.random() * 5) ];
            const rpsState = checkRPSWin(chosenCard, computerCard);

            const state = {
                computerHand,
                computerCard
            }

            if (rpsState === 0) {
                // Tie; do tiebreaker by checking number of cards
                const computerCount = computerHand.filter(card => card === computerCard);
                const playerCount = playerHand.filter(card => card === chosenCard);

                if (computerCount === playerCount) {
                    // Tie
                    state.result = 0;
                } else if (computerCount < playerCount) {
                    // Player wins
                    state.result = 1;
                } else {
                    // Computer wins
                    state.result = -1;
                }
            } else if (rpsState === 1) {
                // Player wins
                state.result = 1;
            } else {
                // Computer wins
                state.result = -1;
            }

            return state;
        },
        playerHand
    }

}