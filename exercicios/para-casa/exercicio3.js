//3 - Crie um algoritmo que leia o valor de um jantar, calcule e informe o valor da taxa do garçom (10%) e o valor total a ser pago.

let valorJantar = 140
const taxaServico = valorJantar * 0.1
const valorTotal = valorJantar + taxaServico

console.log(`A taxa de serviço será de R$${taxaServico.toFixed(2)} e o valor total do jantar será de R$${valorTotal.toFixed(2)}`)
