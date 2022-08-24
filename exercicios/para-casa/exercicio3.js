/*
Crie um algoritmo que leia o valor de um jantar, calcule e informe o 
valor da taxa do garçom (10%) e o valor total a ser pago.
*/

const valorDoJantar = (valor) => {
  const valorDaTaxa = valor * 0.10
const valortotalDoJantar = valor + valorDaTaxa
    console.log(`valor total do jantar R$ ${valortotalDoJantar} `)  
}

valorDoJantar(150)
