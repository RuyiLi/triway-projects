document.addEventListener('DOMContentLoaded', init);

const results = [ 'Computer wins.', 'Tie!', 'Player wins!' ];

function init () {
    const playerHandContainer = document.querySelector('div#playerHand');
    const computerHandContainer = document.querySelector('div#computerHand');
    const resultText = document.querySelector('a#result');

    const { playerHand, playCard } = doRound();

    for (let j = 0; j < 5; j++) {
        const pChild = playerHandContainer.children[ j ];
        pChild.innerText = playerHand[ j ];
        pChild.addEventListener('click', function () {
            const { computerHand, computerCard, result } = playCard(playerHand[ j ]);

            for (let i = 0; i < 5; i++) {
                const cChild = computerHandContainer.children[ i ];
                cChild.innerText = computerHand[ i ];

                if (computerHand[ i ] === computerCard)
                    cChild.classList.add('activeComputer');

                cChild.disabled = true;
            }

            for (let i = 0; i < 5; i++) {
                const pChild_ = playerHandContainer.children[ i ];

                if (pChild_.innerText.toLowerCase() === playerHand[ j ])
                    pChild_.classList.add('activePlayer');

                pChild_.disabled = true;
            }

            resultText.innerText += '\n' + results[ result + 1 ];
        });
    }

    // for (; gamesPlayed < 5; gamesPlayed++) {
    //     await playRound();
    //     console.log(computerScore, playerScore);
    // }
}

// async function playRound () {
    // playerHandContainer.innerHTML = '';

    // const { playerHand, playCard } = doRound();
    // let isClicked = false;

    // for (const card of playerHand) {
    //     const cardBtn = document.createElement('button');
    //     cardBtn.innerText = card.toUpperCase();
    //     cardBtn.addEventListener('click', function () {
    //         isClicked = true;
    //         playCard(card);
    //     });
    //     playerHandContainer.appendChild(cardBtn);
    // }

    // await new Promise((res, rej) => {
    //     setInterval(() => {
    //         if (isClicked) res();
    //     }, 100);
    // });
// }