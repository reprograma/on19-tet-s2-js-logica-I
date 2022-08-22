// 1 - Solicite o preço de uma mercadoria e o percentual de desconto 20%. Exiba no console o valor do desconto e o preço a pagar.

// 2 - Calcule o tempo de uma viagem de carro. Pergunte a distância a percorrer e a velocidade média esperada para a viagem.

// 3 - Crie um algoritmo que leia o valor de um jantar, calcule e informe o valor da taxa do garçom (10%) e o valor total a ser pago.

// 4 - Escreva um programa que pergunte a quantidade de km percorridos por um carro alugado pelo usuário,
// assim como a quantidade de dias pelos quais o carro foi alugado. 
// Calcule o preço a pagar, sabendo que o carro custa 60,00 reais por dia e 0,15 centavos por km rodado.

// 5 - Receba do usuários 3 números e calcule a média entre eles."

var inputPrecoMercadoria = document.querySelector("#preco-mercadoria");
var resposta1 = document.querySelector("#resposta1");

function desconto() {
    resposta1.textContent = "R$ " + (inputPrecoMercadoria.valueAsNumber * 0.8).toFixed(2);
}

var inputDistanciaViagem = document.querySelector("#distancia-viagem");
var inputVelocidadeMedia = document.querySelector("#velocidade-media");
var resposta2 = document.querySelector("#resposta2");

function tempo() {
    resposta2.textContent = (inputDistanciaViagem.valueAsNumber / inputVelocidadeMedia.valueAsNumber).toFixed(2) + " horas";
}

var inputValorJantar = document.querySelector("#valor-jantar");
var resposta3 = document.querySelector("#resposta3");

function serviço() {
    resposta3.textContent = "R$ " + (inputValorJantar.valueAsNumber * 1.1).toFixed(2);
}

var inputKmPercorridos = document.querySelector("#km-percorridos");
var inputDias = document.querySelector("#dias");
var resposta4 = document.querySelector("#resposta4");

function aluguel() {
    resposta4.textContent = "R$ " + ((inputKmPercorridos.valueAsNumber * 0.15) + (inputDias.valueAsNumber * 60)).toFixed(2);
}

var inputN1 = document.querySelector("#n1");
var inputN2 = document.querySelector("#n2");
var inputN3 = document.querySelector("#n3");
var resposta5 = document.querySelector("#resposta5");

function media() {
    resposta5.textContent = (inputN1.valueAsNumber + inputN2.valueAsNumber + inputN3.valueAsNumber) / 3;
}