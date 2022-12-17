const readline = require("readline-sync");

//1 - Solicite o preço de uma mercadoria e o percentual de desconto 20%. Exiba no console o valor do desconto e o preço a pagar.

const precoProduto = 100;
const blackFriday = precoProduto - (precoProduto*0.2)
console.log(`\n1) O preço do produto na Black Friday é ${blackFriday}`);

//2 - Calcule o tempo de uma viagem de carro. Pergunte a distância a percorrer e a velocidade média esperada para a viagem.
console.log('\n2) Qual a distância a ser percorrida? ');
const distancia = readline.question();

console.log('\nE qual a velocidade média/hora esperada para a viagem? ');
const velocidade = readline.question();

const tempoViagem = (velocidade/distancia);

console.log(`\nComo a sua distância é ${distancia} e sua velocidade média é ${velocidade}, você levará ${tempoViagem} horas para chegar ao seu destino. Não se esqueça de beber água no percurso.`)

//3 - Crie um algoritmo que leia o valor de um jantar, calcule e informe o valor da taxa do garçom (10%) e o valor total a ser pago.
const jantar = 80;
const taxaGarcom = jantar * 0.1;
const valorTotal = jantar + taxaGarcom;

console.log(`\n3) Você pagará R$${valorTotal} reais no seu jantar. Animada?`)

//4 - Escreva um programa que pergunte a quantidade de km percorridos por um carro alugado pelo usuário, assim como a quantidade de dias pelos quais o carro foi alugado. Calcule o preço a pagar, sabendo que o carro custa 60,00 reais por dia e 0,15 centavos por km rodado.
console.log('\n4) Quantos quilômetros você irá percorrer? ');
const km = readline.question();

console.log('\nPor quantos dias você ficará com o veículo? ');
const dias = readline.question();

const taxa = km * 0.15

const valorDia = dias * 60

const precoAPagar = (taxa + valorDia)

console.log (`\nO preço a pagar pelo aluguel do carro é R$ ${precoAPagar} reais`)

//5 - Receba do usuários 3 números e calcule a média entre eles.
console.log('\n5) Digite o primeiro número: ');
const numeroUm = readline.question();

console.log('\nDigite o segundo número: ');
const numeroDois = readline.question();

console.log('\nDigite o terceiro número: ');
const numeroTres = readline.question();

const media = ((numeroUm+numeroDois+numeroTres)/3);

console.log(`\nA média dos três números digitados é: ${media}. Obrigada <3\n`)