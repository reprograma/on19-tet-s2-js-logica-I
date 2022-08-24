// 4 - Escreva um programa que pergunte a quantidade de km percorridos por um carro 
// alugado pelo usuário, assim como a quantidade de dias pelos quais o carro foi alugado. 
// Calcule o preço a pagar, sabendo que o carro custa 60,00 reais por dia e 0,15 centavos por
//  km rodado.

let kmPercorridos = 100
let diasAlugado = 10
let diariaDoCarro = 60
let valorPorKm = 0.15
let valorKmRodado = kmPercorridos * valorPorKm
let valorDiarias = diariaDoCarro * diasAlugado 
let valorFinal = valorDiarias + valorKmRodado

console.log(`O preço por km percorrido foi de R$ ${(valorKmRodado.toFixed(2))} o valor da diaria foi de R$ ${(valorDiarias .toFixed(2))} , total a pagar pelo aluguel é de R$: ${(valorFinal).toFixed(2)}.`);









