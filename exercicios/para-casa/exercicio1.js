/*1 - Solicite o preço de uma mercadoria e o percentual de desconto 20%.
 Exiba no console o valor do desconto e o preço a pagar*/

 let preço = 1200
 let desconto = 20

 const valor_do_desconto = ( preço *desconto) /100
 
 const valor_a_pagar = preço - valor_do_desconto

console.log(`Um desconto de ${desconto}% em uma mercadoria de R$ ${preço}, vale, ${valor_do_desconto}`)
 
 console.log(`O valor a se pagar pela mercadoria é R$ ${valor_a_pagar }`)

 /* Solicite o preço de uma mercadoria e o percentual de acréscimo de  15%.
 Exiba no console o valor do acrescimo e o preço a pagar*/

 let preçoDaMercadoria = 1250
 let valorDeAcrescimo = 15

 const valorComAcrescimo = (preçoDaMercadoria * valorDeAcrescimo) / 100
 const valorAPagar = preçoDaMercadoria + valorDeAcrescimo
 console.log(`Um acréscimo de ${valorComAcrescimo}% em uma mercadoria de R$ ${preçoDaMercadoria}, vale, ${valor_do_desconto}`)


