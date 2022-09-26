// trabalhando com operadores aritmeticos

let numeroUm = 10
let numeroDois = 3

let soma = numeroUm + numeroDois
let subtracao = numeroUm - numeroDois
let multiplicacao = numeroUm * numeroDois
let divisao = numeroUm / numeroDois
let resto = numeroUm % numeroDois
let incrementa = numeroUm++
let incrementaMaisUm =numeroUm++ // ele acrescenta 1 do valor original
let decrementa = numeroDois--
let decrementaMaisUm = numeroDois-- // ele tira 1 do valor original


console.log(soma)
console.log(subtracao)
console.log(multiplicacao)
console.log(divisao)
console.log(resto)
console.log(incrementa)
console.log(incrementaMaisUm)
console.log(decrementa)
console.log(decrementaMaisUm)
console.log(numeroDois += 100)
console.log(numeroUm -= 50)
console.log(numeroUm /= 2)
console.log(numeroDois %= 5)
console.log(numeroDois *= 5)
console.log(numeroDois += " que doido, virei uma string!!!") // vira uma string
console.log(numeroUm -= " teste")


/*
-------------------------------------------------------
-------------------------------------------------------
*/

let numeroTres = 500
let numeroQuatro = 85

let ehMaior = numeroTres > numeroQuatro
let ehMenor = numeroTres < numeroQuatro
let ehMaiorOuIgual = numeroTres >= numeroQuatro
let ehMenorOuIgual = numeroTres <= numeroQuatro
let valorIdentico = numeroTres == numeroQuatro
let valorETipoIdentico = numeroTres === numeroQuatro
let ehDiferente = numeroTres !== numeroQuatro
let logicalAnd = numeroDois > numeroQuatro && numeroTres < numeroUm
let logicalOu = numeroDois > numeroQuatro || numeroTres < numeroUm


console.log(ehMaior)
console.log(ehMenor)
console.log(ehMaiorOuIgual)
console.log(ehMenorOuIgual)
console.log(valorIdentico)
console.log(valorETipoIdentico)
console.log(ehDiferente)
console.log(logicalAnd)
console.log(logicalOu)
