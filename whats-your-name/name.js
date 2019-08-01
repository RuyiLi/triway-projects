const p = document.getElementById('name');

const name = prompt('What is your name?');
const isSure = confirm(`Are you sure that ${ name } is your name?`);

if (isSure) {
    // alert(`Hello, ${ name }! Welcome to my site.`);
    p.innerText = `Hello, ${ name }! Welcome to my site.`;
}
