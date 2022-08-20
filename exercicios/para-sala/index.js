/*

| Exemplo 01 | Descrição |
| --- | --- |
| `Variaveis` | 
Vamos criar variaveis usando let e const, 
atribuir valores, identificar comportamentos e saídas quando 
tentarmos recuperar. |
*/

const nome = "Sky"
let idade = 24
const cidade = "São Paulo"

idade += 1

//console.log ("-Exercicio 1-")
//console.log (idade)

//------------------------------------------------------------------------------

/*
| Exemplo 02 | Descrição |
| --- | --- |
| `Concatenar x interpolar` | 
Vamos criar variaveis usando let, const, 
atribuir strings e vamos concatenar e interpolar. |
*/


const sobrenome = "Alarcon"

const nomeCompleto = nome + " " + sobrenome
const nomeCompleto2 = `${nome} ${sobrenome}`
const apresentacao = `Oi, eu sou a ${nomeCompleto2}. Tenho ${idade} anos.`

//console.log ("-Exercicio 2-")
//console.log (apresentacao)

//------------------------------------------------------------------------------

/*
| Exemplo 03 | Descrição |
| --- | --- |
| `Média entre números` | 
Crie uma variavel e atribua como valor uma operacao de média 
entre 5 números inteiros e positivos. |
*/

const listaDeNotas = [1, 2, 3, 4, 5]
let posNotas = 0
let soma = 0

while (posNotas < 5){
    soma += listaDeNotas[posNotas]
    posNotas++
}

const media = soma/posNotas

//console.log ("-Exercicio 3-")
//console.log (media)

//------------------------------------------------------------------------------

/*
| Exemplo 04 | Descrição |
| --- | --- |
| `Quero lucrar` | 
Crie um programa que me diga como lucrar nesta situação:
 quero vender uma bicicleta que 60% do seu valor é R$300,
  por quanto devo vendê-la para lucrar 25%? |
*/


const parteValor = 300
const porcent = 0.6
const valorReal = parteValor / porcent
const lucro = 0.25
const vendaBike = valorReal * (1 + lucro)

//console.log ("-Exercicio 4-")
//console.log (vendaBike)

//------------------------------------------------------------------------------

/*
| Exemplo 05 | Descrição |
| --- | --- |
| `Quero somar` | 
Faça um programa que peça dois números e imprima no console
 a soma desses dois números.|
*/
//exercicio precisa de FrondEnd pra resolução com input

const numSoma1 = 1
const numSoma2 = 2

const resultado = `A soma é ${numSoma1 + numSoma2}`

//console.log ("-Exercicio 5-")
//console.log (resultado)


//------------------------------------------------------------------------------

/*
| Exemplo 06 | Descrição |
| --- | --- |
| `Desapegada` | 
Crie um programa que me diga quanto cobrar para vender um notebook usado:
 o seu custo foi R$3000, por quanto devo vendê-lo descontando 25%? |
*/

const notebook = 3000
const desc = 0.25
const vendaNotebook = notebook * (1-desc)

//console.log ("-Exercicio 6-")
//console.log (vendaNotebook)

//------------------------------------------------------------------------------

/*
| Exemplo 07 | Descrição |
| --- | --- |
| `conversor de medidas` | 
Escreva um programa que receba um valor em metros
 e o exiba no console convertido em milímetros. |
*/

const metro = 1

const milimetro = metro * 1000

//console.log ("-Exercicio 7-")
//console.log (milimetro)

//------------------------------------------------------------------------------

/*
| Exemplo 08 | Descrição |
| --- | --- |
| `calculadora de IMC` | 
Escreva um programa que recebe uma altura em metros e 
o peso em kg e calcule o IMC. |
*/

const height = 1.78
const weight = 68

const BMI = weight / (height^2)

//console.log ("-Exercicio 8-")
//console.log (BMI)

//------------------------------------------------------------------------------

/*
| Exemplo 09 | Descrição |
| --- | --- |
| `Boletim` | 
Escreva um programa que recebe 4 notas, calcula a média e exibe no console. |
*/

let grades = []

grades.push (1, 2, 3, 4, 5);

const len = grades.length
let posGrades = 0
let sumGrades = 0

while (posGrades < len){
    sumGrades += grades[posGrades]
    posGrades++
}

const avg = sumGrades/len

console.log ("-Exercicio 9-")
console.log (avg)