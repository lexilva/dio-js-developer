/*
	Faça um algoritmo que dada as 3 notas tiradas por um aluno em um semestre
	da faculdade. Calcule e imprima no console.
*/

	const nota1= 7;
	const nota2 = 3;
	const nota3 = 7;
	const media = (nota1 + nota2 + nota3)/3;

	console.log('Média: '+media);

	if(media < 5){
		console.log('Reprovação');
	}else if(media >= 5 && media <=7){
		console.log('Recuperação');
	}else{
		console.log('Passou de semestre')
	}