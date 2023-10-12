/*
    Faça um programa que receba a média de um aluno, caso a média seja menor que 5 imprima REPROVADO;
    caso a média seja maior ou igual a 5, menor do que 7 imprima RECUPERAÇÃO;
    caso a média seja maior do que 7 imprima aprovado;
*/
const {gets,print} = require('./funcoes-auxiliares1');
const notas =[];
let somaDasNotas = 0;
for (let i = 0; i < 4; i++) {
    const nota = gets();
    notas.push(nota);
}
for (let i = 0; i < notas.length; i++) {
    somaDasNotas += notas[i];    
}
console.log('Média: '+ (somaDasNotas/notas.length)+' '+print(somaDasNotas/notas.length));
