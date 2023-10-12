/*
	calucular IMC

	condições:
	IMC < 18.5 = a pessoa está aixo dopeso
*/

const peso = 97;
const altura = 1.72;
const imc = peso/Math.pow(altura,2);


if(imc < 18.5){
	console.log('Abaixo do Peso');
}else if(imc >= 18.5 && imc < 25){
	console.log('peso normal');
}else if(imc >= 25 && imc < 30){
	console.log('Acima do peso');
}else if(imc >=30 && imc < 40){
	console.log('Obeso');
}else{
	console.log('Obesidade Grave');
}