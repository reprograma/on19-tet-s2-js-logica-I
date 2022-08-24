/*3 - Crie um algoritmo que leia o valor de um jantar, 
calcule e informe o valor da taxa do garçom (10%) e o valor total a ser pago.*/
// x(1+t/100)
let valor_do_jantar = 250

let taxa_do_garçom =  0.1 //É A MESMA COISA QUE 10/100

const preçoTotal = valor_do_jantar * (1 +  taxa_do_garçom )

console.log( `O valor total é de R$ ${preçoTotal}`)
