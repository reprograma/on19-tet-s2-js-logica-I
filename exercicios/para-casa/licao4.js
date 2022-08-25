//Escreva um programa que pergunte a quantidade de km percorridos por um carro alugado pelo usuário, assim como a quantidade de dias pelos quais o carro foi alugado. Calcule o preço a pagar, sabendo que o carro custa 60,00 reais por dia e 0,15 centavos por km rodado.

let kmPercorrido = 600
let diasAluguel = 4
const valorDiaria = diasAluguel*60
const valorKmRodado = kmPercorrido*0.15
const valorFinal = valorDiaria + valorKmRodado

console.log('O valor a ser pago pelo aluguel é de R$ ' + valorFinal)
