//1 - Solicite o preço de uma mercadoria e o percentual de desconto 20%. Exiba no console o valor do desconto e o preço a pagar.

let valorMercadoria = 300
const valorDesconto = valorMercadoria * 0.2
const valorFinal = valorMercadoria - valorDesconto
console.log(`O valor a pagar é R$${valorFinal.toFixed(2)} e o valor do desconto é R$${valorDesconto.toFixed(2)}`)