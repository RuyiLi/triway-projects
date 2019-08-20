document.addEventListener('DOMContentLoaded', init);

function init () {
	const swup = new Swup({
		linkSelector: 'a'
	});

	swup.on('contentReplaced', function () {
		console.log(`Page changed to ${ location.href }`);
	});
}