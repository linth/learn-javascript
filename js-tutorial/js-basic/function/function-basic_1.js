/* 
    1) 函式是JS的第一級物件: 意思是JS函式雖是函式，同時也是個物件
        - 可在程式執行時期動態建立
        - 可以指定給變數，也可以複製參考
        - 作為參數來傳遞
        - 擁有自己的屬性與方法
    2) 提供了作用域
    - https://ithelp.ithome.com.tw/articles/10108177
*/


// tradictional method.
// function feedCat() {

// }

// JS's function method.
var feedCat = function() {

}

console.log(typeof(feedCat));
console.log(feedCat instanceof Object); // true
console.log(feedCat instanceof Function); // true


var feedIt = feedCat; // 可將函式指定給變數
console.log(feedIt instanceof Object); // true


feedCat.food = 'fish';
console.log(feedCat.food); // fish
console.log(feedCat.constructor); // [Function: Function] 函式可有自已的屬性，而且也可將函式連回去它的建構式。


function feedDog() {
    // return "wow!";
    console.log('wow!');
};

function toDo(action) {
    // console.log(action()); 
    return action(); // 可將函式當作參數來傳遞
};

toDo(feedDog); // wow!