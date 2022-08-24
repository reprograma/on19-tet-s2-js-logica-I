// 1 - Solicite o preço de uma mercadoria e o percentual de desconto 20%. Exiba no console o valor do desconto e o preço a pagar.

let valorMercadoria = 3000
const percentual = valorMercadoria * 0.2
valorAPagar = valorMercadoria - percentual


console.log(`O valor final a pagar é R$${valorAPagar.toFixed(2)} e o valor do desconto é R$${percentual.toFixed(2)}`) 