/*
Reference:
    - https://ithelp.ithome.com.tw/articles/10104427

Note:
    - for-in是用來重複整個非陣列物件，也稱為列舉法（enumeration）
    - 通常用for處理"陣列"，用for-in處理重複"物件"。
    - 要注意的是在列舉物件屬性時很重要的是：使用hasOwnProperty()來過濾掉原型（prototype）屬性。
*/

var i,
    man = {
        hands: 2,
        legs: 2,
        heads: 1,
    };

if (typeof Object.prototype.clone == 'underfined') {
    Object.prototype.clone = function() {

    };
}


// 有用hasOwnProperty來過濾
for (i in man) {
    if (man.hasOwnProperty(i)) {
        console.log(i, ":", man[i]);
    }
}

console.log('');

// 未使用hasOwnProperty來過濾
// TODO: something should be re-checked.
for (i in man) {
    console.log(i, ':', man[i]);
}