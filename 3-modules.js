// Modules

const names = require('./4-names');
console.log(names);
const sayHi = require('./5-utils');
const data = require('./6-alternative-flavors');
require('./7-mind-grenade')

sayHi('susan');
sayHi(names.john);
sayHi(names.peter);

const add = (num1,num2) =>{
    return num1 + num2;
}

console.log(add(1,2));