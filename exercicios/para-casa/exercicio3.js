const entrada = require('prompt-sync')({sigint:true});

let valorJantar;
let taxaGarcon;
//let valorTotal = valorJantar + taxaGarcon

valorJantar = entrada("Informe o valor total do jantar: ");
taxaGarcon = entrada("Digite o valor da taxa a adicionar em porcentagem:  ");
let valorTotal = (valorJantar * taxaGarcon)/100
console.log(`A despesa total será de R$: ${(valorTotal).toFixed(2)}`);