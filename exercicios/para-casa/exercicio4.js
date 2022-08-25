/*
Exercício 4

Escreva um programa que pergunte a quantidade de km percorridos
 por um carro alugado pelo usuário, assim como a quantidade de dias
  pelos quais o carro foi alugado. Calcule o preço a pagar, 
  sabendo que o carro custa 60,00 reais por dia e 0,15 centavos por km rodado.
*/

console.log ("--Exer 4--")

const dayCost = 60
const days = 10
const kmCost = 0.15
const km = 200

const billCar = (dayCost * days) + (kmCost * km)

console.log (billCar)
