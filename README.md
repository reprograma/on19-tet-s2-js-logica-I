<h1 align="center">
  <img src="assets/reprograma-fundos-claros.png" alt="logo reprograma" width="500">
</h1>

# Lógica 1

Turma Online 19 - Todas em Tech  | Back-end | Semana 2 | 2022 | Agnes Ignácio

### Instruções
Antes de começar, vamos organizar nosso setup.
* Fork esse repositório 
* Clone o fork na sua máquina (Para isso basta abrir o seu terminal e digitar `git clone url-do-seu-repositorio-forkado`)
* Entre na pasta do seu repositório (Para isso basta abrir o seu terminal e digitar `cd nome-do-seu-repositorio-forkado`)

### Resumo
O que veremos na aula de hoje?
* Introdução
* O que é JavaScript?
* O que é Node.js?
* Variáveis
* Tipos de dados
* Operadores
* Exercícios
* Sobre a prof

### Introdução

#### O que é lógica?

Lógica de programação é a organização coesa de uma sequência de instruções voltadas à resolução de um problema, ou à criação de um software ou aplicação.

A lógica de programação é o conhecimento anterior a qualquer outro quando falamos em desenvolvimento web porque é a partir dela que os aprendizados posteriores, como por exemplo o das linguagens de programação, farão sentido.

Cada linguagem tem suas próprias particularidades, como sua sintaxe, seus tipos de dados e sua orientação, mas a lógica por trás de todas é a mesma.

Em outras palavras, dominar a lógica de programação é a porta de entrada para tornar-se um programador completo, seja em front-end ou em back-end.

Saiba mais [aqui](https://kenzie.com.br/blog/logica-de-programacao/).

 #### O que é algoritmo?
 
 Algoritmos são um conjunto finito de passos elementares que são aplicados sistematicamente até que a solução seja atingida. De forma simples, podemos dizer que um algoritmo define o caminho que deve ser seguido para chegar até a solução de um determinado problema.

À primeira vista, esse conceito pode parecer complexo, mas basta trazer para o contexto do nosso cotidiano que fica mais fácil entender. Isso porque existem várias tarefas do nosso dia a dia que são basicamente algoritmos, como seguir um manual de instruções para instalar um eletrodoméstico. Fazer um bolo seguindo uma receita é outro ótimo exemplo disso. Nela, temos os ingredientes — ou seja, dados que serão manipulados para atingir a solução —, os passos que devem ser feitos para executar a tarefa e, no final, atingimos o resultado esperado, que é o bolo pronto.

Saiba mais [aqui](https://blog.betrybe.com/tecnologia/algoritmo/#:~:text=Algoritmos%20s%C3%A3o%20um%20conjunto%20finito,solu%C3%A7%C3%A3o%20de%20um%20determinado%20problema.).

#### O que é JavaScript?

JavaScript é uma linguagem de programação de alto nível criada, a princípio, para ser executada em navegadores e manipular comportamentos de páginas web.

Segundo a Mozilla Foundation, atual nome da antiga Netscape Communications Corporations, empresa responsável pela criação do JS, "JavaScript é uma linguagem de programação, leve, interpretada, orientada a objetos, baseada em protótipos e em first-class functions (funções de primeira classe), mais conhecida como a linguagem de script da Internet."

Alguns exemplos de sites que utilizam JS em seu front e back-end hoje em dia são Ebay, LinkedIn e Yahoo.

Mas o JS não se restringe mais apenas às páginas e aos navegadores, como foi durante vários anos: com o advento de diversos frameworks, APIs, melhorias e criação de centenas de funções, hoje já é possível utilizar JavaScript em aplicativos mobile, softwares para desktop e até mesmo em back-end.

Saiba mais [aqui](https://kenzie.com.br/blog/javascript/)

#### O que é Node.JS?

O Node.js pode ser definido como um ambiente de execução Javascript server-side.

Isso significa que com o Node.js é possível criar aplicações Javascript para rodar como uma aplicação autônoma em uma máquina, não dependendo de um navegador para a execução, como estamos acostumados.

Apesar de recente, o Node.js já é utilizado por grandes empresas no mercado de tecnologia, como Netflix, Uber e LinkedIn.

O principal motivo de sua adoção é a sua alta capacidade de escala. Além disso, sua arquitetura, flexibilidade e baixo custo, o tornam uma boa escolha para implementação de Microsserviços e componentes da arquitetura Serverless. Inclusive, os principais fornecedores de produtos e serviços de nuvem já têm suporte para desenvolvimento de soluções escaláveis utilizando o Node.js.

Saiba mais [aqui](https://www.opus-software.com.br/node-js/) e entenda como instalar o node em sua máquina [aqui](https://www.youtube.com/watch?v=8FefZGAGvGM).

#### Variáveis

Variável é o nome utilizado para definir um ou mais valores que são manipulados pelos programas durante a sua operação. O nome “variável” é utilizado por ser um tipo de conteúdo que pode apresentar diferentes valores enquanto o sistema está em execução. Tudo dependerá do comando do usuário e o tipo de operação que é realizado.

Saiba mais sobre variáveis [aqui](https://gaea.com.br/variaveis-programacao/).

Em JavaScript, para definir uma variável, precisamos apresentar duas informações obrigatórias (o escopo e o nome da variável) e uma opcional (o valor atribuído a ela). Saiba mais sobre escopos de variável em JavaScript [aqui](https://www.alura.com.br/artigos/entenda-diferenca-entre-var-let-e-const-no-javascript?gclid=CjwKCAjw6fyXBhBgEiwAhhiZsisk8QsElQAARnOmpt3SEvYk2Q5LEMeJFOtquELv7fA2jKOjCxwnnhoCdfIQAvD_BwE).

#### Tipos de Dados

São os tipos de informações que podemos guardar dentro de uma variável. Em alguns lugares, você encontrará esse conteúdo como "dados primitivos" ou variações dessa nomenclatura. [Aqui](https://www.javascriptprogressivo.net/2018/07/Tipos-Dados-Valores-JavaScript.html) você pode aprender mais sobre tipos de dados.

### Number

Esse é o mais óbvio tipo de dado.
Seu dia de nascimento é um número, seu salário é um número, o ano de um carro, a potência de seu motor.

Basicamente, temos dois tipos de números:

* Inteiro: 1, 2, 3, 4, 5, 2112, -10 etc
* Decimais:
São os quebrados, em nossa língua portuguesa usamos eles separados por vírgulas:
Preço: R$ 1,99
Mas em programação, usamos ponto no lugar de vírgula:
1,99 para gente é 1.99 em computação, ok?

### String 

Strings são, nada mais nada menos, que textos.
Uma palavra, uma frase, um caractere (como  ! @ # $ % "+ _ []/ etc).

Uma string é sempre representada por algo que está dentro de aspas.
Exemplos de strings:

"Olá mundo"
'Curso JavaScript Progressivo'
`a`
"b"
'c'

Perceba que Strings em JavaScript podem ser envolvidas em aspas simples, duplas ou string literals (a crase na língua portuguesa).

Mas, veja bem:
Número: 2112
String   : "2112"

Faz sentido você dividir o número 2112 com outro número, o resultado é um número também. Mas não faz sentido dividir "2112" por um número, pois é uma string, um texto!

### Boolean

Eles podem assumir dois valores apenas:

* True
* False

Ou seja, verdadeiro e falso. E eles são muuuuuito importantes! Também são chamados de valores lógicos. Vamos usar bastante os Booleanos quando formos estudar testes e laços (loopings), bem em breve.

Convencionalmente, o número 0 é sinônimo de falso e tudo que for diferente de 0 (como 1, -1, 2, 3, 4, 5...) é verdadeiro.

### Null

É a representação do vazio, do nada.
String nula: ""

O vazio é um importante tipo de dado também.

### Undefined

Quando aprendemos a definir variáveis, entendemos que as de escopo let e var podem ser inicializadas sem terem um valor atribuído. O tipo de dado undefined representa essa situação onde a variável de referência não tem valor ainda.

### Array

São uma lista de informações que podem ser qualquer outro tipo de dado aqui listado. Duas coisas importante sobre arrays: Eles são ordenados por um index (o primeiro item é de index 0, o segundo de index 1 e assim por diante) e seu conteúdo é envolvido por colchetes e seus itens separados por vírgulas.

### Object

São as 'coisas'.

Uma imagem é um objeto, um botão é um objeto, um parágrafo específico pode ser um objeto, o título da página, um formulário etc.

É uma representação geral de alguma 'coisa'. Pode parecer vago agora, mas durante nosso curso você irá entender melhor o conceito de um objeto. O que é importante de entender é que se trata de um tipo de dado que vai guardar várias informações sobre algo de forma semelhante a um array, mas não de forma ordenada, e sim em um sistema chave: valor; Para acessar um dado dentro de um objeto, o chamamos por sua chave.

### Function

Por fim, temos as funções, que são blocos de código que fazem uma tarefa específica e podem ser 'chamados' para serem executados.
Você aprenderá muito sobre esse tipo de dado nas próximas aulas. No momento, é importante apenas manter em mente que o JavaScript, diferente da grande maioria de linguagens de programação, também entende a função como um tipo de dado.

#### Operadores

Usamos operadores para relacionar os valores das variáveis e usar os resultados dessas relações a favor do nosso algoritmo. Os operadores podem ser aritméticos, de atribuição ou de comparação. Você pode aprender mais sobre operadores [aqui](https://blog.cod3r.com.br/entenda-operadores-javascript-na-pratica/).

**Aritméticos:**

| Operador | Descrição |
| --- | --- |
| `+` | Adição |
| `-` | Subtração |
| `*` | Multiplicação |
| `/` | Divisão |
| `%` | Módulo ou resto da divisão |
| `++` | Incremento|
| `--` | Decremento|

<br>

**Atribuição:**

| Operador | Descrição |
| --- | --- |
| `=` | Atribuição |
| `+=` | Atribuição de soma |
| `-=` | Atribuição de subtração |
| `*=` | Atribuição de multiplicação |
| `/=` | Atribuição de divisão |
| `%=` | Atribuição de resto |
<br>

**Comparação:**

| Operador | Descrição |
| --- | --- |
| `==` | Igual a |
| `===` | Igual a (tanto o valor quanto o tipo) |
| `!=` | Diferente de  |
| `>` | Maior que |
| `>=` | Maior ou igual a |
| `<` | Menor que |
| `<=` | Menor ou igual a |
<br>

**Lógicos:**

| Operador | Descrição |
| --- | --- |
| `&&` | E |
| `||` | Ou |
| `!` | Negação |

### Exercícios

| Exemplo 01 | Descrição |
| --- | --- |
| `Variaveis` | Vamos criar variaveis usando let e const, atribuir valores, identificar comportamentos e saídas quando tentarmos recuperar. |

| Exemplo 02 | Descrição |
| --- | --- |
| `Concatenar x interpolar` | Vamos criar variaveis usando let, const, atribuir strings e vamos concatenar e interpolar. |

| Exemplo 03 | Descrição |
| --- | --- |
| `Média entre números` | Crie uma variavel e atribua como valor uma operacao de média entre 5 números inteiros e positivos. |

| Exemplo 04 | Descrição |
| --- | --- |
| `Quero lucrar` | Crie um programa que me diga como lucrar nesta situação: quero vender uma bicicleta que 60% do seu valor é R$300, por quanto devo vendê-la para lucrar 25%? |

| Exemplo 05 | Descrição |
| --- | --- |
| `Quero somar` | Faça um programa que peça dois números e imprima no console a soma desses dois números.|

| Exemplo 06 | Descrição |
| --- | --- |
| `Desapegada` | Crie um programa que me diga quanto cobrar para vender um notebook usado: o seu custo foi R$3000, por quanto devo vendê-lo descontando 25%? |

| Exemplo 07 | Descrição |
| --- | --- |
| `conversor de medidas` | Escreva um programa que receba um valor em metros e o exiba no console convertido em milímetros. |

| Exemplo 08 | Descrição |
| --- | --- |
| `calculadora de IMC` | Escreva um programa que recebe uma altura em metros e o peso em kg e calcule o IMC. |

| Exemplo 09 | Descrição |
| --- | --- |
| `Boletim` | Escreva um programa que recebe 4 notas, calcula a média e exibe no console. |

| Exemplo 10 | Descrição |
| --- | --- |
| `conversor de temperatura` | Escreva um programa que recebe a temperatura em graus Celsius e converte para Fahrenheit, exiba o resultado no console. |


### Tarefa

| 1 | Solicite o preço de uma mercadoria e o percentual de desconto 20%. Exiba no console o valor do desconto e o preço a pagar. |
| --- | --- |

| 2 | Calcule o tempo de uma viagem de carro. Pergunte a distância a percorrer e a velocidade média esperada para a viagem. |
| --- | --- |

| 3 | Crie um algoritmo que leia o valor de um jantar, calcule e informe o valor da taxa do garçom (10%) e o valor total a ser pago. |
| --- | --- |

| 4 | Escreva um programa que pergunte a quantidade de km percorridos por um carro alugado pelo usuário, assim como a quantidade de dias pelos quais o carro foi alugado. Calcule o preço a pagar, sabendo que o carro custa 60,00 reais por dia e 0,15 centavos por km rodado. |
| --- | --- |

| 5 | Receba do usuário 3 números e calcule a média entre eles. |
| --- | --- |

Os exercícios são de autoria da Simara Conceição.

### Sobre a prof

<h1 align="center">
  <img src="https://cdn.ome.lt/A4oessa9JdQ68TL5_LSrcDP74Mo=/987x0/smart/uploads/conteudo/fotos/ravena_daycV4n.jpg" alt="imagem ravena">
</h1>

Agnes ignácio é artista, ex-aluna da reprograma e pessoa desenvolvedora/consultora na Thoughtworks.

[Instagram](https://www.instagram.com/auroraliquida/)

[Linkedin](https://www.linkedin.com/in/agnes-ign%C3%A1cio-a07762125/)

[GitHub](https://github.com/agnes-ignacio)


<p align="center">
Desenvolvido com :purple_heart:  
</p>

