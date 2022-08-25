/*
Exercício 1

Solicite o preço de uma mercadoria e o percentual de desconto 20%.
Exiba no console o valor do desconto e o preço a pagar.
*/

console.log ("--Exer 1--")

const price = 100
const percent = 20

const sell = price * (1 - percent/100)
const desc = price * percent/100

console.log (desc, sell)
