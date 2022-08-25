// 3 - Crie um algoritmo que leia o valor de um jantar, calcule e informe o valor da taxa do garçom (10%) e o valor total a ser pago.

const dinerTotal = 173
const serviceTax = dinerTotal*0.1
const totalToPay = dinerTotal+serviceTax

console.log(`The total price of dishes eaten on a diner was R$${dinerTotal}. 
The restaurant had a service tax of 10%, which added a value of R$${serviceTax} and the whole price for the evening then was of R$${totalToPay}.`)