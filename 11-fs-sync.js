const {readFileSync, writeFileSync} = require ('fs')
console.log('start');
// const fs = require('fs')
// fs.readFileSync

const first= readFileSync('./content/text.txt', 'utf-8');
const  second = readFileSync('./content/second.txt', 'utf-8');

// console.log(first, second)

writeFileSync('./content/result-sync.txt', `here is the result : ${first}, ${second}`,
{flag: 'a'})

console.log('done with this task');
console.log('starting the next task');