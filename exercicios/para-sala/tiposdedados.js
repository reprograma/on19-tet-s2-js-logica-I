//Ex.: 1 - Vamos criar variaveis usando let e const, atribuir valores, identificar 
//comportamentos e saídas quando tentarmos recuperar.

/*
const nome = "Pâmela"
const sobrenome = "Santos"
let idade = 35

idade = 36

console.log(idade)*/

//Ex.: 2 - Vamos criar variaveis usando let, const, atribuir 
//strings e vamos concatenar e interpolar.
/*
const nome = "Pâmela"
const sobrenome = "Santos"
let idade = 35

console.log(`Meu nome é ${nome} ${sobrenome} e eu tenho ${idade} anos de idade.`)*/

//Ex.: 3 - Crie uma variavel e atribua como valor uma 
//operacao de média entre 5 números inteiros e positivos.
/*
let numerosInteiros = [7, 4, 8, 19, 13] //length conta quantos elementos há no array
let media = (numerosInteiros[0] + numerosInteiros[1] + numerosInteiros[2] + numerosInteiros[3] + numerosInteiros[4])/ numerosInteiros.length

console.log(media)*/

//Ex.: 4 - Crie um programa que me diga como lucrar nesta situação: quero vender uma bicicleta 
//que 60% do seu valor é R$300, por quanto devo vendê-la para lucrar 25%?
/*
let valorBike = (300 * 100)/60
let lucro = valorBike * 0.25
let total = valorBike + lucro

console.log(total)*/

//Ex.: 5 - Faça um programa que peça dois números e 
//imprima no console a soma desses dois números.
/*
let numero1 = 7
let numero2 = 13

console.log(`A soma entre ${numero1} e ${numero2} é igual a ${numero1 + numero2}.`)*/

// Ex.: 6 - Crie um programa que me diga quanto cobrar para vender um notebook usado: 
//o seu custo foi R$3000, por quanto devo vendê-lo descontando 25%?
/*
let custo = 3000
let desconto = 3000 * 0.25
let valorVenda = custo - desconto

console.log(`O valor de venda é de R$ ${valorVenda.toFixed(2)}.`)*/

//Ex.: 7 - Escreva um programa que receba um valor em 
//metros e o exiba no console convertido em milímetros.*/
/*
let metros = 16
let mm = metros * 1000

console.log(`${metros} metros convertidos em mm = ${mm}. `)*/

//Ex.: 8 - Escreva um programa que recebe uma altura 
// em metros e o peso em kg e calcule o IMC.
/*
let altura = 1.68
let peso = 58
let imc = (peso / Math.pow(altura, 2)) // como encontrar a alura ao quadrado 

console.log(`O cálculo do imc é igual a ${imc.toFixed(2)}`)*/

//Ex.: 9 - Escreva um programa que recebe 4 notas, calcula a média e exibe no console.
/*
let notas = [6.7, 8, 10, 5.5]
let media = (notas[0] + notas[1] + notas[2] + notas[3] / notas.length)

console.log(`A média entre as quatro notas é ${media.toFixed(2)}.`)*/

//Ex.: 10 - Escreva um programa que recebe a temperatura em graus Celsius e converte 
// para Fahrenheit, exiba o resultado no console.
/*
let celsius = 27
let fahrenheit = (celsius * 1.8) + 32

console.log(`A temperatura em fahrenheit é igual a ${fahrenheit}.`)*/

