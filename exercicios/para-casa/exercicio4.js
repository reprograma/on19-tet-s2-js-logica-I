/* Escreva um programa que pergunte a quantidade de km percorridos por um carro alugado pelo usuário, assim como a quantidade de dias pelos quais o carro foi alugado. Calcule o preço a pagar, sabendo que o carro custa 60,00 reais por dia e 0,15 centavos por km rodado. */



let entradaEmKm = 33
let entradaEmDias = 30
const carro = 60
let valorCarro = carro * entradaEmDias
let ValorKm = entradaEmKm * 0.15 
let soma =  ValorKm + valorCarro


console.log("O Aluguel ficou no valor de "+soma)