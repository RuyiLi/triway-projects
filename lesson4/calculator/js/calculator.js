document.addEventListener('DOMContentLoaded', init);

const $ = document.querySelectorAll.bind(document);
let p, a, b;

function init () {
    p = $('#res')[ 0 ];
    a = $('#a')[ 0 ];
    b = $('#b')[ 0 ];

    for (const btn of $('button')) {
        const id = btn.id;
        btn.addEventListener('click', function () {
            const res = fn[ id ](+a.value, +b.value);
            p.innerText = `Result:\n${ res }`;
        });
    }
}