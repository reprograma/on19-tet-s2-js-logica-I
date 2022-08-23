const mercadoria = 20
const desconto = 0.2
const ValorDoDesconto = mercadoria * desconto
const PrecoAPagar = mercadoria - ValorDoDesconto
console.log("O valor do desconto dado é de:" + ValorDoDesconto)
console.log("O valor total a se a pagar é de: " + PrecoAPagar)