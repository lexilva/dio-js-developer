/*
	Faça um programa para calucular o valor de uma viagem.

	Voce terá 5 variáveis. Sendo elas:

	1 - Preço do etanol;
	2 - Preço da gasolina;
	3 - O tipo de combustiivel que está no seu carro;
	4 - Gasto médio de combustivel do carro por Km;
	5 - distancia em km da viagem;

	Imprima no console o valor que será gasto para realizar esta viagem
*/

const precoEtanol = 4.79;
const precoGasolina = 5.90;
const tipoDeCombustivel = 10;
const kmPorLitro = 11;
const distanciaEmKm = 170;
const litrosconsumidos = distanciaEmKm/kmPorLitro;
let valorGasto = 0;

if(tipoDeCombustivel === 1){
	valorGasto = litrosconsumidos*precoEtanol;
	console.log('Valor gasto na viagem com Etanol: '+valorGasto.toFixed(2));

}else{
	valorGasto = litrosconsumidos*precoGasolina;
	console.log('Valor gasto na viagem com Gasolina: '+valorGasto.toFixed(2));
}