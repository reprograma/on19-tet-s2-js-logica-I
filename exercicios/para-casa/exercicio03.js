// 3 - Crie um algoritmo que leia o valor de um jantar, calcule e informe o valor da taxa do garçom (10%) e o valor total a ser pago.

const valorJantar = 300
const garçom = 0.1
const gorgeta = valorJantar * garçom
const totalJantar = valorJantar + gorgeta

console.log(`O valor do jantar é de R$${valorJantar.toFixed(2)}, a taxa de serviço é de R$${gorgeta.toFixed(2)}, totalizando a pagar o valor de R$${totalJantar.toFixed(2)} `)
