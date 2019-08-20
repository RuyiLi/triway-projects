document.addEventListener('DOMContentLoaded', init);

let rows, board;

function updateBoard () {
    for (let y = 0; y < 3; y++) {
        for (let x = 0; x < 3; x++) {
            if (typeof (a = board.getAt(x, y)) === 'undefined') continue;
            rows[ y ].children[ x ].children[ 0 ].innerText = a;
        }
    }
}

function init () {
    rows = document.querySelectorAll('tr');

    board = new Board(updateBoard);

    let i = 0;
    for (const el of document.querySelectorAll('button')) {
        const x = i % 3;
        const y = Math.floor(i / 3);
        el.addEventListener('click', function () {
            board.move(x, y);
        });
        i++;
    }
}