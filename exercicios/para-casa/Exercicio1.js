// 1 - Solicite o preço de uma mercadoria e o percentual de desconto 20%. Exiba no console o valor do desconto e o preço a pagar.
let valorDoProduto = 200
let desconto = valorDoProduto * 0.2
const valorFinal = valorDoProduto - desconto
const resposta = `O valor final a pagar é ${(valorFinal).toFixed(2)}, e o valor do desconto é ${(desconto).toFixed(2)}`

console.log(resposta)

