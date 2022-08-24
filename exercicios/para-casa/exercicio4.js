let kmPercorridos = 450
let diasAluguelCarro = 10
let valorDiarias = diasAluguelCarro*60
let valorKmRodado = kmPercorridos*0.15
let valorFinal = valorDiarias + valorKmRodado

console.log(`O valor total a ser pago pelo aluguel do carro é de R$ ${valorFinal.toFixed(2)} .  `)