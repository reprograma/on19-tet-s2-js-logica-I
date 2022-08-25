//1 - Solicite o preço de uma mercadoria e o percentual de desconto 20%. Exiba no console o valor do desconto e o preço a pagar.

let valorDoProduto = 700
let desconto = valorDoProduto * 0.2
const valorFinal = valorDoProduto - desconto
const resposta = `valor a pagar R$ ${(valorFinal).toFixed(2)}, valor do desconto R$ ${(desconto).toFixed(2)}`

console.log(resposta)