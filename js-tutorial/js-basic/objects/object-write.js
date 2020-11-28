/*
    Reference: 
        - https://www.cnblogs.com/libin-1/p/7127481.html
*/

// * object-style writing.
var all = new Object({
    _count: 0,

    m1: function() {
        // m1 function.
        console.log('m1 function...');
    },

    m2: function() {
        // m2 function.
        console.log('m2 function...');
    }
})

all.m1();
all.m2();
console.log('the _count of all =', all._count);


// * IIFE-style writing.
// Immediately-Invoked Function Expression，IIFE）, 可以達到不暴露私有成員的目的
var all2 = (function() {
    var _count = 0;
    var m1 = function() {
        alert(_count);
        console.log('m1 function...');
    }

    var m2 = function() {
        alert(_count+1);
        console.log('m2 function...');
    }
    return {
        m1: m1,
        m2: m2,
    }
})()

console.log('the second programming....');
console.log('m1: ', all2.m1);
all2.m2;
console.log('the _count of all2 =', all2._count); // the _count of all2 =  undefined
