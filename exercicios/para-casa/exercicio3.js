//3 - Crie um algoritmo que leia o valor de um jantar, calcule e informe o valor da taxa do garçom (10%) e o valor total a ser pago.

let valorJantar = 150
const taxaDeServico = valorJantar*0.10
let valorTotalJantar = valorJantar + taxaDeServico

console.log(`valor do jantar R$${valorJantar.toFixed(2)} taxa de serviço R$${taxaDeServico.toFixed(2)}, totalizando R$${valorTotalJantar.toFixed(2)} `)
