/*4 - Escreva um programa que pergunte a quantidade de km percorridos por um carro alugado pelo usuário,
 assim como a quantidade de dias pelos quais o carro foi alugado. Calcule o preço a pagar,
  sabendo que o carro custa 60,00 reais por dia e 0,15 centavos por km rodado.*/
let km_percorrido = 200
let dias = 2

const valorFinal =  (km_percorrido * 0.15) + (dias * 60)

console.log(`Preço total : R$ ${valorFinal}`)