/**
 * Crie uma classe para representar carros.  Os carros possuem uma marca, uma cor, e o gasto médio de combustível por Km rodado.  Crie um método que dado a quantidade de km e o gasto e o preço do combustível nos de o valor gasto em Reais para realizar este percurso
 */
class Carro{
    marca;
    cor;
    gastoMedioPorKm;

    constructor(marca,cor,gastoMedioPorKm){
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm;
    }
    calculaGastoPercurso(distanciaEmKm, precoCombustivel){
        return distanciaEmKm * this.gastoMedioPorKm * precoCombustivel;
    }
}

const uno = new Carro('Fiat','prata', 1/12);
console.log(uno.calculaGastoPercurso(70, 5));
const palio = new Carro('Fiat', 'Preta',1/10);
console.log(palio.calculaGastoPercurso(70,5));