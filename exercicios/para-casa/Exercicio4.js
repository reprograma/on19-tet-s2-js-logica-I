//4 - Escreva um programa que pergunte a quantidade de km percorridos por um carro alugado pelo usuário, assim como a quantidade de dias pelos quais o carro foi alugado. Calcule o preço a pagar, sabendo que o carro custa 60,00 reais por dia e 0,15 centavos por km rodado.

const kmPercorrido = 100
const diasAlugados = 4

const valorKm = 0.15 * kmPercorrido

const valorDias = 60 * diasAlugados

const valorTotal = valorKm + valorDias

console.log (valorTotal)