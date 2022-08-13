/**
 * iterable： 下列都屬於 iterable 類型，意味著都可以使用 for...of 來歷遍
 *  - array
 *  - map
 *  - set
 * 
 *  
 * 
 * Reference:
 *  - https://www.liaoxuefeng.com/wiki/1022910821149312/1023024358748480
 */
'use strict';

var a = [1, 2, 3];

for (var x of a) {
    console.log(x); // 1 2 3
}



