/*
Exercício 1

Solicite o preço de uma mercadoria e o percentual de desconto 20%.
Exiba no console o valor do desconto e o preço a pagar.
*/

const preco = 100
const porcent = 20

const venda = preco * (1 - porcent/100)
const desconto = preco * porcent/100

console.log (desconto, venda)