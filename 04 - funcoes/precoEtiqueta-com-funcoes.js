/*
	Elabore um algoritmo que calcule o que deve
	ser pago por um produto, considerando o preço normal, a etiqueta
	e a escolha da condição de pagamento
	- A vista no débito 10% de desconto
	- A vista no dinheiro ou pix, com 20% de desconto
	- Em duas vezes preço normal da etiqueta sem juros
	- Acima de duas vezes 
*/
function atualizarPreco(valor, aliquota){
    return (valor*aliquota).toFixed(2);
}

const precoDaEtiqueta = 100;
let formaDePagamento = 3;

if(formaDePagamento === 1){
	console.log( atualizarPreco(precoDaEtiqueta,0.9));
}else if(formaDePagamento === 2){
	console.log(atualizarPreco(precoDaEtiqueta,0.85));
}else if(formaDePagamento === 3){
	console.log( atualizarPreco(precoDaEtiqueta,1));
}else{
	console.log(atualizarPreco(precoDaEtiqueta,1.1));
}
