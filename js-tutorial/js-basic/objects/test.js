"use strict";

let formatName = function(name) {
    return name.replace(/(\w+), (\w+)/, '$2 $1');    
};


function show_hello() {
    console.log('hello');
}


module.exports = formatName;