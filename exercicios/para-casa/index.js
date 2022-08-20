/*
Exercício 1

Solicite o preço de uma mercadoria e o percentual de desconto 20%.
Exiba no console o valor do desconto e o preço a pagar.
*/

console.log ("--Exer 1--")

const price = 100
const percent = 20

const sell = price * (1 - percent/100)
const desc = price * percent/100

console.log (desc, sell)

/*
Exercício 2

Calcule o tempo de uma viagem de carro. 
Pergunte a distância a percorrer e a velocidade média esperada para a viagem.
*/

console.log ("--Exer 2--")

const dist = 100
const avgSpeed = 40

const ETA = dist/avgSpeed

console.log (ETA)

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

/*
Exercício 5

Receba do usuários 3 números e calcule a média entre eles.
*/

console.log ("--Exer 5--")

const num = [1, 2, 3]

let sum = 0
let posNum = 0
const len = num.length

while (posNum < len){
    sum += num [posNum]
    posNum++
}

const avg = sum / len

console.log (avg)