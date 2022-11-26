/*4 - Escreva um programa que pergunte a quantidade de km percorridos por um carro alugado pelo usuário,
 assim como a quantidade de dias pelos quais o carro foi alugado. Calcule o preço a pagar,
  sabendo que o carro custa 60,00 reais por dia e 0,15 centavos por km rodado.*/
let kmPercorrido = 300
let dias = 2
const valorFinal =  (kmPercorrido * 0.15) + (dias * 60)

console.log(`Preço total da corrida : R$ ${valorFinal}`)