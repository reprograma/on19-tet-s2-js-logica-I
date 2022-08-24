/* const nome = "Beatriz"
const sobrenome = "Silva"
const nomeCompleto = `${nome} ${sobrenome}`

const idade = 30
const apresentacao = `Oi, meu nome é ${nomeCompleto}, eu tenho ${idade} anos.`
console.log (apresentacao)


// Exemplo 01. Vamos criar variaveis usando let e const, atribuir valores, identificar comportamentos e saídas quando tentarmos recuperar.

//const nome = "Elisângela"
// ao declarar a variável idade como const e atribuir o valor de tipo número 35 e na sequência reatribuir como 36 e rodar no terminal node .\index.js o console.log(idade) vai imprimir um erro TypeError: Assignment to constant variable porque o tipo const não aceita reatribuição de valores. Para resolver esse erro, muda-se para o tipo de variável let
/*let idade = 35
const cidade = "Taubaté"

idade = 36

console.log(idade)*/

/* Exemplo 02. Vamos criar variaveis usando let, const, atribuir strings e vamos concatenar e interpolar

const nome = "Elisângela"
const sobrenome = "Manuel"
const nomeCompleto = nome + " " + sobrenome

console.log(nomeCompleto)

/*const nome = "Elisângela"
const sobrenome = "Manuel"
const nomeCompleto = `${nome} ${sobrenome}` // ao usar crase na abertura e fechamento dá-se o nome de interpolação
const idade = 27
const apresentacao = `Oi o meu nome é ${nome} ${sobrenome}` 

console.log(nomeCompleto)
console.log(apresentacao)*/


// | `Quero lucrar` | Crie um programa que me diga como lucrar nesta situação: quero vender uma bicicleta que 60% do seu valor é R$300, por quanto devo vendê-la para lucrar 25%? |

/*const valorBicicleta = (300/60)*100
const lucroBicicleta = valorBicicleta / 4
const valorFinal = valorBicicleta + lucroBicicleta

console.log(valorFinal)*/

/*const parteValor = 300
const porcentagem = 0.6
const valorReal = parteValor / porcentagem
const venda = valorReal * (1 + 0.25)
console.log(venda)*/

/* `Quero somar` | Faça um programa que peça dois números e imprima no console a soma desses dois números.|

const numero1 = 20
const numero2 = 7
const soma = entrada1 + entrada2

console.log(soma)

// Exemplo 03. Crie uma variavel e atribua como valor uma operacao de média entre 5 números inteiros e positivos.
/*let nota1 = 8
//let nota2 = 6
let nota3 = 9
let nota4 = 7
let nota5 = 10*/
/*let listaDeNotas = [8, 6, 9, 7, 10]
let n = 5
//let soma = nota1 + nota2 + nota3 + nota4 + nota5
let soma = listaDeNotas[0] + listaDeNotas[1] + listaDeNotas[2] + listaDeNotas[3] + listaDeNotas[4]
let media = soma / n 

console.log(media)*/



/* | `Desapegada` | Crie um programa que me diga quanto cobrar para vender um notebook usado: o seu custo foi R$3000, por quanto devo vendê-lo descontando 25%? |

const custo = 3000
const desconto = custo *(25/100)
const valorVenda = custo - desconto 
console.log(valorVenda)

| `conversor de medidas` | Escreva um programa que receba um valor em metros e o exiba no console convertido em milímetros. |


let medMetros = 4
const medMilimetro = 1000
const conversor = medMetros * medMilimetro

console.log(conversor)
*/





