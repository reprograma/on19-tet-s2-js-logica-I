/*| Exemplo 01 | Descrição |
| --- | --- |
| `Variaveis` | Vamos criar variaveis usando let e const, atribuir valores, identificar comportamentos e saídas quando tentarmos recuperar. |*/

const nome = "Mariana"

/* const nome = 'Mariana';  também aceita aspas simples*/

/* const nome = `Mariana`  também aceita a crase invertida, mais conhecida como template string*/

// em regra, o meu nome é const, não pode ser mudado. Const é para usar um valor que não pode ser mudado no meu software, é uma medida de segurança. Isso é uma STRING, o sinal de "=" significa ATRIBUIÇÃO, ou seja, o que está escrito depois dele é o que vai estar dentro da minha variavel. 

let idade = 27 // number, numero inteirp

/* let idade = 27.8 também pode ser um float */  

let cidade = "Itararé"

idade = 28 // por ser let é uma variavel que vai mudar 

cidade = "São Paulo" // também posso me mudar de cidade 

const ehnegra = true // boolean 

const vazia = null // tipo de dado null, variavel está nula 

const dadosPessoais = ["Mariana", 27, "Itararé", true]

let indefinida =  // aqui está um valor vazio, não definido. no caso da let posso atribuir um valor para ela depois, mas enquanto nao atribuir nada ela é valor undefined. 


console.log(nome)
console.log(idade)
console.log(cidade)
console.log(ehnegra)
console.log(vazia)
console.log(dadosPessoais)
console.log(indefinida)