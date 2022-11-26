/*3 - Crie um algoritmo que leia o valor de um jantar, 
calcule e informe o valor da taxa do garçom (10%) e o valor total a ser pago.*/
// x(1+t/100)
let valorDoJantar = 250

let taxaDoGarçom =  0.1 //É A MESMA COISA QUE 10/100

const preçoTotal = valorDoJantar * (1 +  taxaDoGarçom)

console.log( `O valor total a ser pago é  R$ ${preçoTotal}`)
