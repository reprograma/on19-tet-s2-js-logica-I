const recebe = require('prompt-sync')({sigint:true});

let distancia;
let velocidadeMedia;

distancia = recebe("Informe a distância percorrida em Km: ");
velocidadeMedia = recebe("Informe a velocidade média em km/h: ");
console.log(`A duração de sua viagem será de: ${(distancia / velocidadeMedia).toFixed(2)} h/m.`);
