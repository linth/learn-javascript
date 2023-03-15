/**
 * for-loop base 2.
 * 
 * Reference:
 *  - https://ithelp.ithome.com.tw/articles/10104073
 */

var arr = [1, 2, 6, 22, 8, 10];

// bad method.
for (var i=0; i<arr.length; i++) {
    console.log('the index [' + i + '] arr: ', arr[i]);
};

// good method.
for (var i = 0, max = arr.length; i < max; i++) {
    // 請注意 , 和 ;
    console.log('the index [' + i + '] arr: ', arr[i]);
};

// good method + 遵照單一「var」模式
var i = 0,
    max,
    myarray = [1, 2, 4, 2, 66, 100];

for (i=0, max=myarray.length; i<max; i++) {
    console.log('the index [' + i + '] myarray: ', myarray[i]);
}

// 進一步改進 (good method + 遵照單一「var」模式)
var i,
    new_arr = [];

for (i=new_arr.length; i--;) {
    console.log(new_arr[i]);
}
