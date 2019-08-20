function test () {
    var foo = 10;       // Defined in local scope
    console.log(foo);   // What will happen?
}

test();
console.log(foo);       // What will happen?