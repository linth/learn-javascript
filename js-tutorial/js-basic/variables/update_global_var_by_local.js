var aa = 1; // global.


function f1() {
    var a = 2;
    console.log('a', a); // 2

    var aa = 3;
    console.log('the aa is in the f1(): ', aa); // 3, in this case, "aa" is f1.aa

    this.b = 10;
}

console.log('the aa is = ', aa);

function f2() {
    aa += 5;
    console.log('the aa is in the f2(): ', aa); // 6
}


var res = f1();
f2();
// console.log('f1\'s aa', res.aa); // undefined
console.log('finial aa = ', aa);
console.log('b =', f1.b); // b = undefined