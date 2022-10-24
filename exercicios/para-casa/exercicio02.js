// 2 - Calcule o tempo de uma viagem de carro. Pergunte a distância a percorrer e a velocidade média esperada para a viagem.

const distância = 50
let velocidadeMedia = 70

tempo = (velocidadeMedia * distância) / 60
tempo = tempo.toFixed(1) 

console.log(`O tempo de viagem previsto é de ${tempo} horas.`)