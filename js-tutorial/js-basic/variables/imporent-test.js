var aa = 1; // global.


function f1() {
    var a = 2;
    console.log('a', a); // 2

    var aa = 3;
    console.log('aa', aa); // 3, in this case, "aa" is f1.aa

    this.b = 10;
}

function f2() {
    aa += 5;
    console.log('aa', aa); // 6
}


var res = f1();
f2();
// console.log('f1\'s aa', res.aa); // undefined
console.log('finial aa = ', aa);
console.log('b =', f1.b); // b = undefined