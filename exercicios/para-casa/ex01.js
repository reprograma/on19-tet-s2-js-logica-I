// Exercício de Casa 🏠

// 01 - Solicite o preço de uma mercadoria e o percentual de desconto 20%. Exiba no console o valor do desconto e o preço a pagar

console.log('Informe o preço da mercadoria:')
const preco = 100
console.log('R$' + ' ' + preco)
console.log('Informe o percentual de desconto:')
const desconto = (20 / 100) * 100
console.log(desconto + ' ' + '%')
const precoAposDesconto = preco - desconto

console.log('O desconto foi de R$' + ' ' + desconto.toFixed(2))
console.log('O preço com desconto é R$' + ' ' + precoAposDesconto.toFixed(2))
