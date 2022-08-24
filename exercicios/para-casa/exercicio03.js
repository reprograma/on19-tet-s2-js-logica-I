//3 - Crie um algoritmo que leia o valor de um jantar, calcule e 
//informe o valor da taxa do garçom (10%) e o valor total a ser pago.

let valorJantar = 300
const taxaDeServico = valorJantar*0.10
let valorTotalJantar = valorJantar + taxaDeServico

console.log(`O valor do jantar é de R$${valorJantar.toFixed(2)} a taxa de serviço é de R$${taxaDeServico.toFixed(2)}, totalizando R$${valorTotalJantar.toFixed(2)} `)



