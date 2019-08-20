function doSomething (int, arr, obj) {
    int = 5;
    arr[ 0 ] = 5;
    obj[ 'foo' ] = 'bar';
}

const a = 0;
const b = [ 1, 2, 3 ];
const c = {
    baz: 'qux'
};

doSomething(a, b, c);

console.log(a);
console.log(b);
console.log(c);

// const prices = {
//     apples: 100,
//     oranges: 2,
//     bananas: 2.5,
//     strawberries: 'yes',
// }

// prices[ 'apples' ] = -5;

// console.log(prices);

// for (const element of Object.entries(prices)) {
//     const [ key, value ] = element;
//     console.log(`${ key } are $${ value }.`);
// }