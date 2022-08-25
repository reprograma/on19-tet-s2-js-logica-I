/*

2 - Calcule o tempo de uma viagem de carro. Pergunte a distância a percorrer e a velocidade média esperada para a viagem.

*/


//declara valores
const dist = 300;
const vel = 80;

//calcula tempo
let temp = (dist / vel)

//calcula tempo com os minutos
let r1 = Math.floor(temp)
let decimal = Math.floor((temp - Math.floor(temp))*60)

//Exibe no terminal
console.log("\nO tempo total de viagem será de: " + r1 + " horas e " +  decimal + " minutos\n");


