const entrada = require('prompt-sync')({sigint:true});

let kmPercorrido;
let quantidadeDias;

kmPercorrido = entrada("Informe o quilometro total percorrido com o veículo: ");
quantidadeDias = entrada("Informe a quantidade de diárias utilizadas:  ");
let custoCarro = (0.15 * kmPercorrido);
let kmRodado = (60 * quantidadeDias);
let despesaTotal = (custoCarro + kmRodado);
console.log(`O preço por km percorrido foi de R$ ${(custoCarro .toFixed(2))} o valor da diaria foi de R$ ${(kmRodado .toFixed(2))} , total a pagar pelo aluguel é de R$: ${(despesaTotal).toFixed(2)}`);
