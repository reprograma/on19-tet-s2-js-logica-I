// Exercício de Casa 🏠

// 03 - Crie um algoritmo que leia o valor de um jantar, calcule e informe o valor da taxa do garçom (10%) e o valor total a ser pago

console.log('Informe o valor do jantar:')
const valorJantar = 750
console.log('R$' + ' ' + valorJantar.toFixed(2))
console.log('Porcentual da taxa do garçom:')
const taxaGarcom = (10 / 100) * 100
console.log(taxaGarcom + ' ' + '%')
valorTaxa = valorJantar * (taxaGarcom / 100)
totalConta = valorJantar + valorTaxa
console.log('')
console.log('Total da conta:')
console.log('R$' + ' ' + totalConta.toFixed(2))
console.log('Valor da taxa de serviço:')
console.log('R$' + ' ' + valorTaxa.toFixed(2))
