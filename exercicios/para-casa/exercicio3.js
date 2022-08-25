// Exercício 3. Crie um algoritmo que leia o valor de um jantar, calcule e informe o valor da taxa do garçom (10%) e o valor total a ser pago.
let entrada = 20
let pratoPrincipal = 35
let bebida = 5
let valorJantar = entrada + pratoPrincipal + bebida
const taxaGarcom = 0.10
let valorTxServico = valorJantar * taxaGarcom
let valorTotalJantar = valorJantar + valorTxServico

console.log("O valor do serviço prestado por nosso garçom é R$" + valorTxServico)
console.log("O valor total do seu jantar é R$" + valorTotalJantar)