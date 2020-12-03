/* 
Reference:
    - https://ithelp.ithome.com.tw/articles/10109161

（1）私有：函數內之var即屬此類
（2）特權：函數內用this關鍵字即屬此類，在函數外可呼叫
（3）共有静態：可以想成class method，直接用建構式呼叫之
（4）共有：直接鏈在prototype的方式
*/


// (1) 私有屬性和方法
var Student = function() {
    var name = 'george';
    var id = 'F001';
}

var s = new Student();
console.log('the name of student: ', s.name); // the name of student:  undefined

// (2) 特權屬性和方法
var Book = function() {
    this.title = 'Machine learning';
    this.getName = function() {
        return this.title;
    };
};

var b = new Book();
console.log('the getName function: ', b.getName());
console.log('the title: ', b.title);


// (3) 共有静態屬性和方法
var Car = {};
Car._name = 'TOYOTA';
Car.alertName = function() {
    console.log('the name of car: ', Car._name);
};

Car.alertName();


// (4) 共有屬性和方法
var Truk = {};
Truk.prototype = {
    init:function() {
        console.log('this is truk prototype.');
    }
}

Truk.prototype.init();