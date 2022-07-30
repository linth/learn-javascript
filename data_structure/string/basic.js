/**
 * string 的新增方法
 * 
 * TODO: 需要增加說明跟範例!
 * 
 * Reference:
 *  - https://es6.ruanyifeng.com/#docs/string
 *  - https://es6.ruanyifeng.com/#docs/string-methods
 */


String.raw = function(strings, ...values) {
    let output = '';
    let index;

    for (index=0; index<values.length; index++) {
        output += strings.raw[index] + values[index];
    }

    output += strings.raw[index];
    return output;
}


// console.log(String.raw());
