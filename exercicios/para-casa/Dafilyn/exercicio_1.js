/* 

1 - Solicite o preço de uma mercadoria e o percentual de desconto 20%. Exiba no console o valor do desconto e o preço a pagar.

*/

//declara valores
const valr = 500
const desc = 10

//calcula
let valrComDesc = (valr * (100-desc))/100

//Exibe no terminal
console.log("\no valor final do produto com desconto é: R$" + valrComDesc + "\n");
