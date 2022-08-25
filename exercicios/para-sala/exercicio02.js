/* | Exemplo 02 | Descrição |
| --- | --- |
| `Concatenar x interpolar` | Vamos criar variaveis usando let, const, atribuir strings e vamos concatenar e interpolar. |*/

const nome = "Mariana"

const sobrenome = "Cristina"

const nomeCompleto = nome + " " + sobrenome // as virgulas e espaços separam as consts, ou seja, separam os nomes. Também se deve utilizar o sinal de "+" para separar as consts da frase escrita.

let idade = 27

idade = 28

const cidade = "Itararé"

const apresentação = "Oi, meu nome é" + " " + nome + " e meu sobrenome é " + sobrenome + "." + " " + "Eu tenho " + idade + " "+ "anos" // muito confuso, tive que usar aspas até para colocar um ponto final depois da const

console.log (nomeCompleto)
console.log (idade)
console.log (apresentação)

//

const outroNome = "Beyoncé"

const outroSobrenome = "Knowles"

const outroNomeCompleto = `${outroNome} ${outroSobrenome}`

const outraApresentacao = `Sou fã da cantora de nome ${outroNome} e sobrenome ${outroSobrenome}. Ou seja, o nome completo dela é ${outroNomeCompleto}`

console.log (outroNomeCompleto)
console.log (outraApresentacao)

