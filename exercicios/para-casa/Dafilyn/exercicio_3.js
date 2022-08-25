/*

3 - Crie um algoritmo que leia o valor de um jantar, calcule e informe o valor da taxa do garçom (10%) e o valor total a ser pago.

*/

//declara as variáveis
const valor = 500
const taxa =  0.1

//calcula
let total = valor * (1 +  taxa)

//exibe no terminal
console.log("\nO valor total é de: R$" + total + "\n");