document.addEventListener('DOMContentLoaded', init);

let numCookies = localStorage[ 'cookies' ] || 0;
let numCookiesText;

function init () {
    const cookieBtn = document.getElementById('cookie');
    numCookiesText = document.getElementById('numCookies');

    showCookies();

    cookieBtn.addEventListener('click', addCookies);
}

function save () {
    localStorage[ 'cookies' ] = numCookies;
}

function showCookies () {
    numCookiesText.innerText = `${ numCookies } Cookies`;
}

function addCookies (amount = 1) {
    numCookies++;
    showCookies();
    save();
}