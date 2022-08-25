/*

4 - Escreva um programa que pergunte a quantidade de km percorridos por um carro alugado pelo usuário, assim como a quantidade de dias pelos quais o carro foi alugado. Calcule o preço a pagar, sabendo que o carro custa 60,00 reais por dia e 0,15 centavos por km rodado.

*/

//declara
const andado = 200
const dias = 2

//calcula
let valorFinal = (andado * 0.15) + (dias * 60)

//exibe
console.log("\nValor total: R$" +  valorFinal + "\n")