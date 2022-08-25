//Crie um algoritmo que leia o valor de um jantar, calcule e informe o valor da taxa do garçom (10%) e o valor total a ser pago.

let valorJantar = 150
const valorTaxa = valorJantar * 0.10
const valorTotal = valorJantar + valorTaxa

console.log('O jantar custou R$ ' + valorJantar)
console.log('Taxa do garçom R$ ' + valorTaxa)