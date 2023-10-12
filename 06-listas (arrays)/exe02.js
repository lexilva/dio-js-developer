/*
Crie um programa que seja capaz de percorrer uma lista de números e imprima cada numero par encontrado
*/ 
function lerLista(lista){
    for (let i = 0; i < lista.length; i++) {
        if (isNumeroPar(lista[i])){
            resultado.push(lista[i])
        }
    }
}
function isNumeroPar(numero){
    if(numero % 2 === 0){
        return -1
    }
}

const listaDeNumeros = [7,12,24];
const resultado = [];
lerLista(listaDeNumeros);

console.log(resultado);