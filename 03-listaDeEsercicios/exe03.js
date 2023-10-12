/*
	Elabore um algoritmo que calcule o que deve
	ser pago por um produto, considerando o preço normal, a etiqueta
	e a escolha da condição de pagamento
	- A vista no débito 10% de desconto
	- A vista no dinheiro ou pix, com 20% de desconto
	- Em duas vezes preço normal da etiqueta sem juros
	- Acima de duas vezes 
*/
const precoDaEtiqueta = 100;
let formaDePagamento = 4;
console.log('Forma de Pagamento: ');
console.log('1 - Débito, 2 - Dinheiro ou Pix, 3 - Parcelado em 2x, 4 - Parcelado acima de 2x');

if(formaDePagamento === 1){
	console.log('valor do produto: '+precoDaEtiqueta*0.9.toFixed(2));
}else if(formaDePagamento === 2){
	console.log('valor do produto: '+precoDaEtiqueta*0.85.toFixed(2));
}else if(formaDePagamento === 3){
	console.log('valor do produto: '+precoDaEtiqueta.toFixed(2));
}else{
	console.log('valor do produto: '+(precoDaEtiqueta*1.1).toFixed(2));
}
