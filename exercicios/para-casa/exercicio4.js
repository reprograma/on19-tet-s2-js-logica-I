/* 4 - Escreva um programa que pergunte a quantidade de km percorridos por um carro alugado pelo usuário, assim como a quantidade de dias pelos 
quais o carro foi alugado. Calcule o preço a pagar, sabendo que o carro custa 60,00 reais por dia e 0,15 centavos por km rodado. */

const traveledKm = 57
const daysRented = 3
const dayValue = 60
const kmValue = 0.15
const rentPrice = daysRented*dayValue + traveledKm*kmValue

console.log(`For a rented car which traveled ${traveledKm} km over the course of a ${daysRented} days rental, the final price paid was R$${rentPrice}.`)