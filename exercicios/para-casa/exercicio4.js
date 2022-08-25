// Exercício 4. Escreva um programa que pergunte a quantidade de km percorridos por um carro alugado pelo usuário, assim como a quantidade de dias pelos quais o carro foi alugado. Calcule o preço a pagar, sabendo que o carro custa 60,00 reais por dia e 0,15 centavos por km rodado.
let kmPercorrido = 400
let diasCarroAlugado = 3
const diariaCarro = 60
const taxaQuilometragem = 0.15 * kmPercorrido
let precoLocacao = diariaCarro * diasCarroAlugado + taxaQuilometragem

console.log("O preço a pagar pelo carro alugado é R$" + precoLocacao)