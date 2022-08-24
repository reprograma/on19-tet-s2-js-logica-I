//4 - Escreva um programa que pergunte a quantidade de km percorridos por um carro alugado pelo usuário, assim como a quantidade de dias pelos quais o carro foi alugado. Calcule o preço a pagar, sabendo que o carro custa 60,00 reais por dia e 0,15 centavos por km rodado.
let kmPercorridos = 350
let diasAluguel = 5
const valorKm = kmPercorridos * 0.15
const valorAluguel = diasAluguel * 60
const valorFinal = valorKm + valorAluguel
console.log(`O valor total a ser pago pelo aluguel do carro será de R$${valorFinal.toFixed(2)}`)
