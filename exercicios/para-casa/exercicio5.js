/*
Exercício 5

Receba do usuários 3 números e calcule a média entre eles.
*/

console.log ("--Exer 5--")

const num = [1, 2, 3]

let sum = 0
let posNum = 0
const len = num.length

while (posNum < len){
    sum += num [posNum]
    posNum++
}

const avg = sum / len

console.log (avg)