//4 - Escreva um programa que pergunte a quantidade de km percorridos por um carro alugado pelo usuário, assim como a quantidade de dias pelos quais o carro foi alugado. Calcule o preço a pagar, sabendo que o carro custa 60,00 reais por dia e 0,15 centavos por km rodado.

const quantidadeKm = 384
const quantidadeDias = 17
const valorDia = 60
const valorPorKm = 0.15

const valorTotalKm = quantidadeKm * valorPorKm
const valorTotalDias = quantidadeDias * valorDia

const valorTotalFinal = valorTotalDias + valorTotalKm

console.log("Valor total a pagar R$ " + valorTotalFinal.toFixed(2))

