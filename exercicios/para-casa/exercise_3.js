// 3 - Crie um algoritmo que leia o valor de um jantar, calcule e informe o valor da taxa do garçom (10%) e o valor total a ser pago.

const dinerTotal = 1337
const tip = dinerTotal*0.1
const totalToPay = dinerTotal+tip

console.log(`The total price of the diner was R$${dinerTotal}. 
The waiter's tip is 10%, which adds the value of R$${serviceTax}. The final price consists of R$${totalToPay}.`) 