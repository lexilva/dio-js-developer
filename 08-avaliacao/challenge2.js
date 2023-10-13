/**
 * Faça um programa que receba N(quantidade de números) e seus respectivos valores
 * Imrima o maior número par e o menor número impar.
 * 
 * Exemplo:
 *  Entrada:
 * 5
 * 3
 * 4
 * 1
 * 10
 * 8
 * 
 * saída:
 *  Maior número par: 10
 *  Menor número impar: 1
 */
const {gets,print} = require('./funcoes-auxiliares2');
const n = gets();
let maiorNumeroPar = null;
let menorNumeroImpar = null;

function isNumeroPar(numero){
    if(numero % 2 === 0){
        if(maiorNumeroPar == null || numero >= maiorNumeroPar){
            maiorNumeroPar = numero;
            return maiorNumeroPar
        }
    }else{
        if(menorNumeroImpar == null || numero <= menorNumeroImpar){
            menorNumeroImpar = numero;
            return menorNumeroImpar;
        }
    }
}

for (let i = 0; i < n; i++) {
    const numero = gets();
    isNumeroPar(numero);
}

print('Maior número par: '+maiorNumeroPar);
print('Menor número impar: '+menorNumeroImpar);


