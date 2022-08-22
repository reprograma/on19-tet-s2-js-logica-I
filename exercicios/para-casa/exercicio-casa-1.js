//1 - Solicite o preço de uma mercadoria e o percentual de desconto 20%. Exiba no console o valor do desconto e o preço a pagar.

const produto = 59.90
const percentualDesconto = 20
const desconto = (produto/100)*20
const precoFinal = produto - desconto

console.log ("Desconto R$ " + desconto)
console.log("Preço a pagar R$ " + precoFinal)
