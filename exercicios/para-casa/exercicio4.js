/*
Escreva um programa que pergunte a quantidade de km percorridos por um carro
 alugado pelo usuário, assim como a quantidade de dias pelos quais o carro 
 foi alugado. Calcule o preço a pagar, sabendo que o carro custa
 60,00 reais por dia e 0,15 centavos por km rodado.
*/

const quantidadeDeKm = 10
const quantidadeDeDias =2
const valorDosKmRodados = quantidadeDeKm * 0.15 
const valorTotalDosDias = quantidadeDeDias * 60 
const valorTotal = valorDosKmRodados + valorTotalDosDias
console.log(valorTotal)





