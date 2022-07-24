'use strict';

const readLineSync = require('readline-sync')
let n1 = readLineSync.question('Valor de A: ')
let n2 = readLineSync.question('Valor de B: ')
let total = parseFloat(n1) + parseFloat(n2)
console.log(`${n1} + ${n2} = ${total}`)