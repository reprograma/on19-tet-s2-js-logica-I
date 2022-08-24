// Crie um algoritmo que leia o valor de um jantar, calcule e informe o valor da taxa do garçom (10%) e o valor total a ser pago.
let valorDoJantar = 1000
const taxaDoGarcom = 1000 * 0.1
const valorTotalJantar = valorDoJantar + taxaDoGarcom

console.log(`O valor total do jantar é de R$ ${(valorTotalJantar).toFixed(2)}. E a taxa do garcom é de ${(taxaDoGarcom).toFixed(2)}`)