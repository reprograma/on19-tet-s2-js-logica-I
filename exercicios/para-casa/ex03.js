// 3 - Crie um algoritmo que leia o valor de um jantar, calcule e informe 
// o valor da taxa do garçom (10%) e o valor total a ser pago.

let valorJantar = 222
const taxaDeServico = valorJantar * 0.10
let valorTotalJantar = valorJantar + taxaDeServico

console.log(`O valor final do jantar com a taxa do garçom é de ${valorTotalJantar.toFixed(2)}.`)