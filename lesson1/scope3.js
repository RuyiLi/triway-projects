function test () {
    var foo = 10;
    return foo;
}

console.log(foo);           // Error!

var bar = test();

if (1 == 1) {
    var qux = 9;
}

console.log(bar + qux);     // 19









// var bar;
// var qux;

// function test () {
//     var foo;
//     foo = 10;
//     return foo;
// }

// console.log(foo);        // Error, still!

// bar = test();

// if (1 == 1) {
//     q = 9;
// }

// console.log(bar + quz);  // 19