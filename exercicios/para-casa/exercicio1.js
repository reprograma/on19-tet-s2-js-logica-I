//Solicite o preço de uma mercadoria e o percentual de desconto 20%. Exiba no console o valor do desconto e o preço a pagar.

let valorDoProduto = 200
const desconto = valorDoProduto * 0.2
const valorFinal = valorDoProduto - desconto

const resposta = `O valor final a pagar é ${valorFinal} e o valor do desconto é ${desconto} reais`
console.log(resposta)
