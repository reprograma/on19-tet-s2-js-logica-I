//4 - Escreva um programa que pergunte a quantidade de km percorridos por um carro alugado pelo usuário, 
//assim como a quantidade de dias pelos quais o carro foi alugado.
// Calcule o preço a pagar, sabendo que o carro custa 60,00 reais por dia e 0,15 centavos por km rodado.

const kmpercorrido = 1000
const dias = 20

const valordia = 60
const kmrodado = 0.15

const totaldia = valordia*dias
const totalkm = kmpercorrido*kmrodado

const totalapagar = totaldia + totalkm

console.log(totalapagar)
