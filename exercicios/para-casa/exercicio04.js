// 4 - Escreva um programa que pergunte a quantidade de km percorridos por um carro alugado pelo usuário, 
//assim como a quantidade de dias pelos quais o carro foi alugado. Calcule o preço a pagar, 
//sabendo que o carro custa 60,00 reais por dia e 0,15 centavos por km rodado.

let qtdeKmPorDia = 120 
let qtdeDias = 15
const valorDia = 60.00 
const KmRodado = 0.15 

let kmPercorridos = qtdeKmPorDia * valorDia 
let valorAluguel = qtdeDias * valorDia 

let valorRodado = kmPercorridos * KmRodado 

let valorTotalAPagar = valorAluguel + valorRodado

console.log(`O valor total a ser pago pelo aluguel do carro é de R$ ${valorTotalAPagar.toFixed(2)} .  `)








