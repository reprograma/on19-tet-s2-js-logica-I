/*
Exercício 3

Crie um algoritmo que leia o valor de um jantar, 
calcule e informe o valor da taxa do garçom (10%) e o valor total a ser pago.
*/

console.log ("--Exer 3--")

const dinner = 100
const taxWaiter = 10

const waiter = 100 * taxWaiter / 100
const billDinner = 100 * ((taxWaiter / 100) + 1)

console.log (waiter, billDinner)
