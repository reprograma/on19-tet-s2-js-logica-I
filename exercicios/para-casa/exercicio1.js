/* 
1 - Solicite o preço de uma mercadoria e o percentual de desconto 20%.
 Exiba no console o valor do desconto e o preço a pagar.
*/

const valorMercadoria = 100
const valorDoDesconto = valorMercadoria * 0.20
const valorFinal = valorMercadoria - valorDoDesconto
console.log(`valor do desconto: R$  ${valorDoDesconto}`)
console.log(`valor final do produto: R$  ${valorFinal}` )