/**
 * 顯示出變數或列出資料
 *  - 使用 ``
 *  - 變數前面使用 ${ }
 * 
 */

class Animal {
    constructor(name) {
        this.name = name;
    }
}


var a = new Animal('haha');
console.log(`there is a ${a.name} animal here.`);
