//Modules - Encapsulated code (only share minimum)
//CommonJs - every file is module by default
const names = require('./4-name');
const sayHi = require('./5-utils')
const data = require('./6-alternative-flavour')
console.log(data)
require('./7-mind-grenade')
//console.log(names)

// sayHi('susan')
// sayHi(names.David)
// sayHi(names.Emmanuel)