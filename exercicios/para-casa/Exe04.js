//Questão 4: Escreva um programa que pergunte a quantidade de km percorridos por um carro alugado pelo usuário, 
// assim como a quantidade de dias pelos quais o carro foi alugado.
//Calcule o preço a pagar, sabendo que o carro custa 60,00 reais por dia e 0,15 centavos por km rodado.

let kmPer = 2500        //Valor Fictício
let kmRod = 0.15        //Valor Fixo
let diasAlug = 7
let valorDiaria = 60       // Valor Fixo

let precoAPagar = (diasAlug * valorDiaria) + (kmPer * kmRod)

console.log("O preço final a pagar será de R$${precoAPagar}.")