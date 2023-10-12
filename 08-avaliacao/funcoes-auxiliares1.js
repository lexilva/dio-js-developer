

const notas = [-8,6,-7,5];
let i = 0;

function gets(){
    const nota = notas[i];
    i++;
    return nota;
}
function print(nota){
    if(nota >= 0 && nota < 5){
        console.log('REPROVADO!!!!');
    }else if ((nota >= 5) && (nota < 7)){
        console.log('Recuperação!')
    }else if(nota >= 7 && nota <= 10){
        console.log('Parabéns pela Aprovação!!')
    }else{
        return 'Valor Inválido';
        
    }
    
}

module.exports = {gets,print};