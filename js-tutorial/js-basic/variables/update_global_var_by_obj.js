/* 
Reference:
    - https://ithelp.ithome.com.tw/articles/10109161
*/
function Person(h, w) {
    this.height = h;
    var weight = w; // using private variable

    this.get_height = function() {
        return this.height;
    }

    this.get_weight = function() {
        return weight;
    }
}

var Man = function(name, h, w) {
    this.name = name;
    this.height = null;
    this.weight = null;

    if (this.height === null) {
        this.height = h;
    }

    if (this.weight === null) {
        this.weight = w;
    }

    this.show_arg = function() {
        // NOTE: the outside of function can get arguments.
        console.log('h: ', h);
        console.log('w: ', w);
    }

    this.update = function() {
        // TODO: partial update if needed. 
        if (this.name === name) {
            if (this.height !== h) {
                // check the value of height is the same as h.
                this.height = h;
            }
            
            if (this.weight !== w) {
                // check the value of height is the same as h.
                this.weight = w;
            }
        }
    }
}


var aa = new Person(180, 80);
console.log('aa', aa.get_height(), aa.get_weight());
console.log('the height: ', aa.height); // 180
console.log('the weight: ', aa.weight); // undefined.

aa.height = 170;
console.log('the height: ', aa.height); // 170
console.log('the weight: ', aa.weight);

var m = new Man('george', 190, 78);
m.show_arg();
console.log('man\'s height: ', m.height); // 190
console.log('man\'s weight: ', m.weight); // 78

m.update();
console.log('man\'s height: ', m.height); // 190
console.log('man\'s weight: ', m.weight); // 78