document.addEventListener('DOMContentLoaded', init);

function init () {
    const swup = new Swup({
        linkSelector: 'a'
    });

    swup.on('contentReplaced', function () {
        console.log(`Current page: ${ location.href }`);
    });
}