//Faça um programa para calcular o valor de uma viagem
//você tera 3 variáveis.  Sendo elas:
//1 - preço do combústivel;
//2- Gasto médio do combustível do carro por KM
//3- Distância em Km da viagem;

const precoCombustivel = 5.79;
const kmPorLitro = 12;
const distanciaEmKm = 1580;

const litrosConsumido = distanciaEmKm / kmPorLitro;
const valorGasto =litrosConsumido * precoCombustivel;
console.log(valorGasto.toFixed(2));
