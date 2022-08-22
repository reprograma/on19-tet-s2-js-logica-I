//3 - Crie um algoritmo que leia o valor de um jantar, calcule e informe o valor da taxa do garçom (10%) e o valor total a ser pago.

const valorjantar = 200
const taxaGorjeta = (200 /100) * 10
const valorTotal = valorjantar + taxaGorjeta

console.log("Valor da taxa do garçom R$ " + taxaGorjeta)
console.log("Valor total R$ " + valorTotal)