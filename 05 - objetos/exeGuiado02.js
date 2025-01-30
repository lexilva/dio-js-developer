/**
 * Crie uma classe para representar pessoas.  Para cada pessoa teremos os atributos: nome, peso, e altura.
 * As pessoas devem ter a capacidade de dizer o valor do seu IMC(IMC = peso / (altura * altura)), e após criar a classe pessoa deve ser instanciada a pessoa chamada José que tem 70 quilos e 1,75 de altura e peça a josé para dizer o valor do seu IMC
 */

class Pessoa{
    nome;
    peso;
    altura;

    constructor(nome,peso,altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }
    calcularImC(){
        return this.peso/(this.altura * this.altura);
    }
    classificarIMC(){
        const imc = this.calcularImC();
        if(imc < 18.5){
            return ('Abaixo do Peso');
        }else if(imc >= 18.5 && imc < 25){
            return ('peso normal');
        }else if(imc >= 25 && imc < 30){
            return ('Acima do peso');
        }else if(imc >=30 && imc < 40){
            return ('Obeso');
        }else{
            return ('Obesidade Grave');
        }
    }

}

const jose = new Pessoa('José', 70, 1.75);
console.log(jose.classificarIMC());
const renan = new Pessoa('Renan', 100, 1.75);
console.log(renan.classificarIMC());
const vitor = new Pessoa('Vitor', 60, 1.69);
console.log(vitor.classificarIMC());