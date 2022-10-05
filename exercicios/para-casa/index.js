//Solicite o preço de uma mercadoria e o percentual de desconto 20%. Exiba no console o valor do desconto e o preço a pagar.

let precoNormal = 500;
let precoDesconto = precoNormal - (precoNormal * 0.2)

console.log(`O preço com desconto é ${precoDesconto}`);

//Calcule o tempo de uma viagem de carro. Pergunte a distância a percorrer e a velocidade média esperada para a viagem.

let distancia = 250;
let tempo = 4;

const velocidadeMedia = (distancia/tempo);

console.log(`a distancia percorrida foi ${distancia} e a velocidade média foi ${velocidadeMedia}`);

// Crie um algoritmo que leia o valor de um jantar, calcule e informe o valor da taxa do garçom (10%) e o valor total a ser pago.

let valorRefeicao = 260;
const gorjeta = valorRefeicao * 0.1;
const valorTotal = valorRefeicao + gorjeta

console.log(`A gorjeta dada ao garçom é de R$${gorjeta} reais`);
console.log(`O valor total a ser pago é de R$${valorTotal} reais`);


//Escreva um programa que pergunte a quantidade de km percorridos por um carro alugado pelo usuário, assim como a quantidade de dias pelos quais o carro foi alugado. Calcule o preço a pagar, sabendo que o carro custa 60,00 reais por dia e 0,15 centavos por km rodado

let kmRodado = 200;
const diasRodados = 7;
const taxaFixa = 0.15;
const valorPago = (kmRodado * diasRodados + kmRodado * taxaFixa )
console.log(`O valor a ser pago do aluguel é de : R$${valorPago} reais`);


//Receba do usuários 3 números e calcule a média entre eles.

let num1 = 5;
let num2 = 90;
let num3 = 13;

const media = (num1+num2+num3)/3

console.log(`A média é ${media}`);



