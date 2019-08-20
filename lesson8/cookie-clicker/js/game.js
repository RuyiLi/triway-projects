document.addEventListener('DOMContentLoaded', init);

let amountText, shopContainer;
let cookies;

function init () {
    cookies = parseInt(localStorage[ 'cookies' ]) || 0;

    amountText = document.querySelector('h1#numCookies');
    shopContainer = document.querySelector('div#shop');

    const cookieBtn = document.querySelector('button#cookie');
    cookieBtn.addEventListener('click', addCookies);

    addCookies(null, 0);
    loadShop();

    setInterval(processItemClicks, 1000);
}

function processItemClicks () {
    for (const item of Object.values(ITEMS)) {
        addCookies(null, item.currentCps);
    }
}

function loadShop () {
    for (const [ name, item ] of Object.entries(ITEMS)) {
        const btn = document.createElement('button');

        btn.innerText = `${ name }\nCost: ${ item.cost }\nQuantity: ${ item.quantity }`;
        btn.classList.add('shopItem');

        btn.addEventListener('click', function () {
            console.log(item);
            if (cookies >= item.cost) {
                addCookies(null, -item.cost);
                item.purchase();
                btn.innerText = `${ name }\nCost: ${ item.cost }\nQuantity: ${ item.quantity }`;
            }
        });

        shopContainer.appendChild(btn);
    }
}

function save () {
    localStorage[ 'cookies' ] = cookies;
    localStorage[ 'items' ] = JSON.stringify(ITEMS);
}

function addCookies (_, amount = 1) {
    cookies += amount;
    amountText.innerText = `${ cookies } Cookies`;
    save();
}