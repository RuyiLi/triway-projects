const BASE = 'http://ytapi.glitch.me/search?query=';

fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(r => r.json())
    .then(body => {
        console.log(body);
    }); 