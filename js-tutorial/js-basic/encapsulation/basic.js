/* the encapsulation of OOP has four categories: 
    1) 私有: 函數內之var即屬此類
    2) 特權: 函數內用this關鍵字即屬此類，在函數外可呼叫
    3) 共有静態: 可以想成class method，直接用建構式呼叫之
    4) 共有,: 直接鏈在prototype的方式
    https://ithelp.ithome.com.tw/articles/10109161
*/

var pkg = function() {
    var name = 'george';
    var show_name = function() {
    }
}

var p = new pkg();
console.log(p.name); // undefined.

var pkg2 = function() {
    this.title = 'this is a title.';
    this.get_title = function() {
        return this.title;
    };
};

var p2 = new pkg2();
console.log(p2.get_title()); // this is a title.
console.log(p2.title); // this is a title.


var pkg3 = {};
pkg3._name = 'george';
pkg3.alertName = function() {
    console.log(pkg3._name);
}

pkg3.alertName(); // george


var pkg4 = {};
pkg4.prototype = {
    init:function() {
        console.log('george for pkg4');
    }
};

pkg4.prototype.init(); // george for pkg4