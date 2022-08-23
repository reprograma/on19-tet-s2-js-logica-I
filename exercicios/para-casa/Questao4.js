//Escreva um programa que pergunte a quantidade de km percorridos por um carro alugado pelo usuário, assim como a quantidade de dias pelos quais o carro foi alugado. Calcule o preço a pagar, sabendo que o carro custa 60,00 reais por dia e 0,15 centavos por km rodado.

const valorDia = 60
const valorKm = 0.15
let valortotalDeDias = 5 * valorDia
let valorTotalDeKms = 180 * valorKm

let totalKmPercorrido = valortotalDeDias + valorTotalDeKms

console.log(totalKmPercorrido)
