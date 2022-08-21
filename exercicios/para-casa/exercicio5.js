const entrada = require('prompt-sync')({sigint:true});

let num1;
let num2;
let num3;

num1 = entrada("Digite o primeiro número: ");
num2 = entrada("Digite o segundo número: ");
num3 = entrada("Digite o terceiro número: ");
let media = ((parseInt(num1) + parseInt(num2) + parseInt(num3))/3);
console.log(`A média dos números informados anteriormente é: ${media}`);